
import React,{useState,useEffect} from "react";

function UserList(){
 const [users,setUsers]=useState([]);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState(null);

 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json())
  .then(data=>{
   setUsers(data);
   setLoading(false);
  })
  .catch(()=>{
   setError("Error fetching API");
   setLoading(false);
  })
 },[])

 if(loading) return <p>Loading...</p>
 if(error) return <p>{error}</p>

 return(
  <div>
   <h3>Users API</h3>
   {users.map(u=>(
    <div key={u.id}>
     <p>{u.name}</p>
     <p>{u.email}</p>
     <p>{u.phone}</p>
    </div>
   ))}
  </div>
 )
}
export default UserList;
