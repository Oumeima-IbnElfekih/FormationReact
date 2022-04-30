import React from "react";



export default class ClassComponent extends React.Component {
    // sans constructeur
/* state = {
    value1 : "new value",
    value2 :100,
    value3 : {value31 : " hello from object"}
} */
    // avec constructeur 
    constructor(props) {
        super(props);
        this.state = {
            value1 : "new value",
            value2 :100,
            value3 : {value31 : " hello from object"
        } }
    }

render(){
    return (
        <> 
        <p>{this.state.value1}</p> , 
        <p>{this.state.value2}</p> ,
        <p>{this.state.value3.value31}</p> 
        <h1> hello {this.props.name} {this.props.prenom} from class component </h1> </>)
}
}