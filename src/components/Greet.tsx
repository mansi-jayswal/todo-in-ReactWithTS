type GreetTypes={
    name:string,
    age:number,
    isLoggedIn:boolean,
    person:{
        firstName:string,
        lastName:string,
    }
    personList: {
        firstName:string,
        lastName:string,
    }[]
}
function Greet({name, age ,isLoggedIn , person , personList}:GreetTypes) {
  return (
    <div>
      <h2 className="text-red-400">
      <p>***************************************</p>
        PRACTICING PROPS WITH TYPESCRIPT!
        <p>***************************************</p>

      </h2>
      <h2 className="text-red-400">
        {
            isLoggedIn ? `Hello ${name.toUpperCase()} from Greet component, your age is ${age}` : 'Welcome guest'
        }
      </h2>
      <p>***************************************</p>
      <h4>created by:</h4>
      <span>{person.firstName.toUpperCase()}</span>{" "}
      <span>{person.lastName.toUpperCase()}</span>
      <p>***************************************</p>

      <h4>person listing as follows</h4>
        {
            personList.map((name) =>(
                <>
                <span>full name: </span>{"  "}
                <span>{name.firstName}</span>{" "}
                <span>{name.lastName}</span>
                <br></br>
                </>
            ))
        }

      
      

    </div>
  )
}

export default Greet;


//prop types in ts with reactjs
//when using props , we have to define the type of props we're getting from parent component
//we can define that using type alias as shown above
//type or interface : when building application use type , when building libraries use interface
