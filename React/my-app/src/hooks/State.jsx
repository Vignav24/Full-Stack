import React, { useState } from 'react'

const State = () => {
    const [count,setCount]=useState(0)
    const [like,setLike]=useState(0)
    const [dislike,setDislike]=useState(0)
return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setLike(like+1)}>👍{like}</button>
        <button onClick={()=>setDislike(dislike+1)}>😞{dislike}</button>


    </div>
)
}

export default State