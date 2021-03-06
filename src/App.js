import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes  } from "react-router-dom";
import ClassComponent from './Components/ClassComponent';
import Home from './Components/Home';
import FunctionalComponent from './Components/FunctionalComponent';
import Navbar from './Components/Navbar';
import FirstComponent from './Components/FirstComponent';
import Users from './userMangement/Users';
import AddUser from './userMangement/AddUser';
import UpdateUser from './userMangement/UpdateUser';
 


function App() {
 
 
  return (
    <div className="App">
    
     
       
      <img src={logo} className="App-logo" alt="logo" />
      
      <BrowserRouter  basename="/" >
      <Navbar /> 
      <Routes>
      <Route exact  path="/"  element={ <Home  />}/>
      <Route exact  path="/users"  element={ <Users  />}/>
      <Route exact  path="/adduser"  element={ <AddUser  />}/>
      <Route exact  path="/updateUser/:id"  element={ <UpdateUser  />}/>
      <Route exact  path="/functionalComponent"  element={ <FunctionalComponent />} />
      <Route exact  path="/classComponent" element={ <ClassComponent />} />
   
      </Routes>
    </BrowserRouter>









     
     
      

    </div>
  );
}

export default App;




   
      {/*   */}