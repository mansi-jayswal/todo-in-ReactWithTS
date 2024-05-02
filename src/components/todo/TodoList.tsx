import {ChangeEvent, FormEvent, useState} from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState<string>("");
  const [searchQuery,setSearchQuery] = useState<string>("");

  const handleAddTodo = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoText.trim() !== "") {
      const newTodo: Todo = {
        id: todos.length     + 1,
        text: todoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTodoText("");
    }
  };

  const handleCompleteTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const searchTodo = (todos: Todo[]) => {
    return todos.filter((todo) => todo.text.includes(searchQuery));
  }
  
  return (
    <div className="text-center mt-8 flex flex-col">
      <h1 className="font-semibold text-purple-900 text-3xl mt-4 mb-2">TODO list with React & TS</h1>
      <div className="flex justify-center align-center">
        
        <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="add todo here..."
          className="border-2 mt-2 mr-2 p-4 border-gray-700"
          value={todoText}
          onChange={(e:ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value)}
        />
        <button type="submit"
          className="border-2 rounded-lg bg-slate-400 p-2 text-black w-32 h-16 hover:bg-gray-300">Add</button>
        </form>
      </div>
      <div className="text-center w-96 ml-[600px] mt-4">
      <input
          type="text"
          placeholder="Search..."
          className="border-2 mt-2 mr-2 p-4 border-gray-700"
          value={searchQuery}
          onChange={(e:ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
        />
    {
      todos.length===0 ? <div className="mt-4 "><h1 className="text-3xl font-semibold
       text-purple-400">No tasks to do!</h1></div> 
      :

    
      <ul className="mt-4 space-y-2">
        {searchTodo(todos).map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between h-16 rounded-lg px-4 py-2 
           ${todo.completed? "bg-purple-300" : "bg-purple-200" }`}>
            <span className={`flex-grow ${todo.completed ? "line-through" : ""}`}>{todo.text}</span>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-1 rounded-md w-24 ${
                  todo.completed
                    ? "bg-gray-400 text-gray-700"
                    : "bg-blue-500 text-white"
                }`}
                onClick={() => handleCompleteTodo(todo.id)}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="px-3 py-1 rounded-md bg-red-500 text-white"
                onClick={() => handleDeleteTodo(todo.id)}
              >
              Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
}
      </div>
    </div>
  );
}

export default TodoList;
