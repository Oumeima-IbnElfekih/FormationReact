import { useEffect, useState } from "react";



const  FunctionalComponent = (props)  => {
    //The React useState Hook allows us to track state in a function component.
    //State generally refers to data or properties that need to be tracking in an application.
    const [counter,setCounter] = useState(0);
    const [message,setMessage]= useState("hello message");

    /* The useEffect Hook allows you to perform side effects in your components.

    Some examples of side effects are: fetching data, directly updating the DOM, and timers.

    useEffect accepts two arguments. The second argument is optional.

    useEffect(<function>, <dependency>) */
    // reference https://www.w3schools.com/

   
    useEffect(() => {
        console.log(
          "cette fonction va etre execute la premiere fois et a chaque modification de la variable color "
        );
        console.log("car le deuxieme argument est counter ");
        return () => {
          console.log(
            "cette partie va etre execute pour nettoyer et  lors de l'operation unmounting "
          );
        };
      }, [counter]);
    
     useEffect(() => {
      
        console.log("cette fonction va etre execute une fois seulement ");
        console.log("car le deuxieme argument est un tableau vide ");
        return () => {
          console.log(
            "cette partie va etre execute seulement lors de l'operation unmounting "
          );
        };
      }, []);

           useEffect(() => {
            console.log("cette fonction va etre execute chaque re-render");
            console.log("car pas de deuxieme argument passer");
          });

      const increment = () => {
            setCounter(counter +1);
          } 
    return ( <> 
    
     <p>counter : {counter}</p>
    <button onClick={increment}>Increment</button> </> )
}
export default FunctionalComponent ;