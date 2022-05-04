import { Link } from "react-router-dom";

const Navbar= () =>{
    return (
    <div>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/classComponent">ClassComponent</Link>
      </li>
      <li>
        <Link to="/functionalComponent">FunctionalComponent</Link>
      </li>
     
    </div>
    );
  }
  export default Navbar;