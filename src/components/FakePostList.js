
import React,{useState,useEffect} from "react";
import axios from "axios";

function FakePostList(){
 const [posts,setPosts]=useState([]);
 const [filter,setFilter]=useState("all");

 const loadData=()=>{
  axios.get("https://dummyjson.com/posts")
  .then(res=>setPosts(res.data.posts))
 }

 useEffect(()=>{
  loadData()
 },[])

 const filtered = filter==="all" ? posts : posts.filter(p=>p.userId==filter)

 return(
  <div>
   <h3>Fake API Posts</h3>

   <select onChange={(e)=>setFilter(e.target.value)}>
    <option value="all">All</option>
    <option value="1">User 1</option>
    <option value="2">User 2</option>
    <option value="3">User 3</option>
   </select>

   <button onClick={loadData}>Refresh</button>

   {filtered.map(p=>(
    <div key={p.id}>
     <h4>{p.title}</h4>
     <p>{p.body}</p>
    </div>
   ))}
  </div>
 )
}
export default FakePostList;
