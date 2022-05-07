import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from "../api/users";
export default function Users()  {



    const [users, setUsers] = useState([]);  
    console.log(users)

    const retrieveUsers = async () => {
        const response = await api.get("/users");
        console.log(response);
        return response.data;
      };
   
 
    useEffect(() => {
      const getUsers = async () => {
        const userList = await retrieveUsers();
        if (userList) setUsers(userList);
      };
  
       
        getUsers();
      }, []);
      
      const removeUser = async (id) => {
        await api.delete(`/users/${id}`);
        const newUserList = users.filter((user) => {
          return user.id !== id;
        });
      
        setUsers(newUserList);
      };
    
     
       
      
   return (
   <>
   
   <Link to="/adduser"> <button>Add User</button></Link>

   <table>
    <thead>
        <tr>
            <th colspan="2">The User List</th>
        </tr>
    </thead>
    
    <tbody>
    <tr>
    <td>id</td>  
         <td>name</td>  
         <td>age</td>  
        </tr>
        {users.map(u => {
         return  <tr key={u.id} >  <td>{u.id}</td> <td>{u.name}</td><td>{u.age}</td> 
         <td>
         <button onClick={()=>removeUser(u.id)}> Delete User</button>
         
         </td>
          <td>
         <Link to={`/updateUser/${u.id}`} > <button >Update User</button></Link> 
     </td>
      
         </tr>
        })}
       
    </tbody>
</table>

  </>)}






{/* <Link to="/addUser">
          <button >Add User</button>
        </Link> */}


/* */