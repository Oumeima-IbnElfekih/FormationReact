import React, { useState } from "react";
import api from "../api/users";
import { useNavigate } from "react-router-dom";
function AddUser() {
 
  const navigate = useNavigate();
  const [user, setUser] = useState({name :"" , age :""})
  console.log("new user value" ,user);
  const addUser = async (e)  => {
    e.preventDefault();

    // controle de saisie
    if (user.name === "" || user.age === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
   //appel for the api
    await api.post("/users", user);
    // user : {}
    setUser({});

    //redirection
    navigate(`/users`);
   
  };
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
    return (
      <div >
        <h2>Add a new User</h2>
        <form onSubmit={addUser}>
        
          <div >
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="field">
            <label>Age</label>
            <input
              type="text"
              name="age"
              placeholder="age"
              value={user.age}
              onChange={(e) => onChange(e)}
            />
          </div>
          <button>Save</button>
        </form>
      </div>
    );
  
}

export default AddUser;