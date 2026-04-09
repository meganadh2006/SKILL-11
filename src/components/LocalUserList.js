
import React,{useState,useEffect} from "react";

function LocalUserList(){
 const [users,setUsers]=useState([]);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState(null);

 useEffect(()=>{
  fetch("/users.json")
  .then(res=>res.json())
  .then(data=>{
   setUsers(data);
   setLoading(false);
  })
  .catch(()=>{
   setError("Error loading data");
   setLoading(false);
  })
 },[])

 if(loading) return <p>Loading...</p>
 if(error) return <p>{error}</p>

 return(
  <div>
   <h3>Local Users</h3>
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
export default LocalUserList;
