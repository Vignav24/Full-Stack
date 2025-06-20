import React, { useEffect, useState } from 'react'

const Post = () => {
    const [count,setCount]=useState(0)
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>setUsers(data))
    },[])
    console.log(users);
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Post