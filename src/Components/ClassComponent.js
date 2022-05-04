import React from "react";



export default class ClassComponent extends React.Component {
    // without constructor
/* state = {
    value1 : "new value",
    value2 :100,
    value3 : {value31 : " hello from object"}
} */
    // with constructor 
    constructor(props) {
        super(props);
        this.state = {
            value1 : "new value",
            value2 :100,
            value3 : {value31 : " hello from object",
            
        } ,
        counter: 0 
        }
        // méthode attachée
     this.increment = this.increment.bind(this);
    }
    componentDidMount() {
        console.log("component did mount :) ");
      }
    
    componentDidUpdate() {
        console.log("component did update :) ");
        console.log("current state of the counter " + this.state.counter);
      }
      
      increment() {
        this.setState((oldState) => ({
            counter: oldState.counter + 1,
        }));
      }
      displayMessage() {
        console.log("c'est une méthode détachée");
      }
      
render(){
    return (
        <> 
         <p>counter : {this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.displayMessage}>display Message</button>
        <h1> hello {this.props.name} {this.props.prenom} from class component </h1> </>)
}
}