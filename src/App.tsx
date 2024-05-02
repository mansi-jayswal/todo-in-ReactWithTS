// import DisplayCards from "./components/DisplayCards";
// import Greet from "./components/Greet"
import TodoList from "./components/todo/TodoList";

function App() {
  // const person:{firstName:string ; lastName:string} = {
  //   firstName:'mansi',
  //   lastName:'Jayswal'
  // }
  
  // const personList = [
  //   {
  //     firstName:'alice',
  //     lastName:'willam'
  //   },
  //   {
  //     firstName:'john',
  //     lastName:'willam'
  //   },
  //   {
  //     firstName:'bob',
  //     lastName:'willam'
  //   }
  // ]

  return (
    <div className="m-4">
      {/* <div className="text-center bg-purple-100 ">
    <Greet name='mansi' age={20} isLoggedIn={true} person={person} personList={personList}/>
      </div>
    <DisplayCards /> */}
    <TodoList />
    
    </div>
  )
}

export default App;

