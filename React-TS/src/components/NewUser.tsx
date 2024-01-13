import React, { ChangeEvent, useState,MouseEvent } from 'react'

const NewUser = () => {
    const [userName, setuserName]= useState("");
    
    const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setuserName(event.target.value);
    };
    const handleClick = (event: MouseEvent<HTMLButtonElement>) =>{
        console.log(userName);
        
        };
  return (
    <div>
        <h2>Create new user</h2>
        <input type="text" 
        placeholder='Enter your name'
        value={userName} onChange={handleUserNameChange} />
        <button onClick={handleClick} >Show name</button>
      
    </div>
  )
}

export default NewUser
