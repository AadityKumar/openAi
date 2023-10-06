import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState('');
  const [response , setResponse] = useState('');
  
  const submitHandler = (e)=>{
    fetch('http://localhost:500/', {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({message})
    }).then((res)=>res.json()).then((data)=>setResponse(data.message))
    console.log(message)
  }

  return (
    <div>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        rows='4' cols='30'
      />
      <button onClick={submitHandler}>Submit</button>
      <div>
        {response}
      </div>
    </div>
  )
}
export default App;
