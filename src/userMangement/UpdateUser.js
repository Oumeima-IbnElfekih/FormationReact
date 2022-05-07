import React, { useEffect, useState } from "react";
import api from "../api/users";
import { useNavigate, useParams } from "react-router-dom";
function UpdateUser(props) {
  let params = useParams(); 
 // let {id} =useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  //console.log(id);
  //console.log(params.id);
  console.log(user);

  const retrieveUser = async () => {
    const response = await api.get("/users/"+params.id);
  //  console.log(response.data);
    return response.data;
  };
  const getUser = async () => {
    const user = await retrieveUser();
    if (user) setUser(user);
  };
  useEffect(() => {
      getUser();
 }, []);

  const UpdateUser = async (e)  => {
    e.preventDefault();
    if (user.name === "" || user.age === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
   
    await api.put(`/users/${params.id}`, user);
    navigate(`/users`);
   
  };
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
    return (
       <div >
         <h2>Update this User with {params.id} identifier </h2>
        <form onSubmit={UpdateUser}>
        
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
          <button >Submit</button>
        </form> 
      </div> 
    );
  
}

export default UpdateUser;