


export default function EcmaScriptComponent() {
    const FirstName = "John";
    const LastName = <p> Doe </p>;
   
    /* test the difference between var , const , let */
    // const

    const variable2 = 1 ;
    //variable2=2;
   // console.log(variable2); 



    //const object 
    const person = { 
        firstName : "Jane",
        lastName : "Doe",
        email : "JaneDoe@gmail.com",
    }
  //  console.log("object 1 person" ,person)
    person.email = "Jane@gmail.com";
   // console.log("object 2 person" ,person)
    
    const array = [1,2,3,4,5,6];
    array[0]="chaine de caracteres";
    array[6]=7;
    console.log("new array" ,array);
   


    // var
    var variable1 = 1;
    variable1 = "new value";
    console.log(variable1);
   

    // let
    let variable3 =1 ;
    variable3 = 100;
    console.log(variable3);



    /*  Arrow Function */

   const sum = function(a,b) {
       return a+b
   }
   console.log(sum(1,2));

   const sum2 = (a,b=7) => a+b ;
   console.log(sum2(1));


    /* spread operator object / array */

    const person1 = { 
        "firstName" : "Jane",
        "lastName" : "Doe",
       
    }
    console.log(person1);
    const person2 ={
        ...person1,"age": 15, "email" :"email@gmail.com"
    }
    console.log(person2);

    /* map function */
    const persons = [
        {   id :1,
            firstName : "Jane",
            lastName : "Doe",

        },
        {   id :2,
            firstName : "John",
            lastName : "Doe",

        }
    ]
    console.log(persons);
    return (
        //   <p>Hello {FirstName}</p>{LastName}
       
        <>
        {persons.map(p=> {
            return <h1>{p.id}, {p.firstName} , {p.lastName}</h1>
        })}
     
        </>
             
          )
}