import React, { ChangeEvent, FormEvent, useState } from 'react'

const Form = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const handleNameChange = (event: 
        ChangeEvent<HTMLInputElement>)=>{
            setName(event.target.value);
        };
        const handleEmailChange = (event: 
            ChangeEvent<HTMLInputElement>)=>{
                setEmail(event.target.value);
            };
            const handleFormSubmit = (event: 
                FormEvent<HTMLFormElement>)=>{
                    event.preventDefault();
                   const newUser = {name,email};
                   console.log(newUser);
                   
                };
  return (
    <div>
        <h2>Create user</h2>
        <form onSubmit={handleFormSubmit}>
       <div>
       <label htmlFor="name">
            Name
            <input type="text" id='name'
            value={name} onChange={handleNameChange} required />
        </label>
       </div>
       <div>
       <label htmlFor="email">
            Email
            <input type="text" id='email'
            value={email} onChange={handleEmailChange} required />
        </label>
       </div>
       <button type='submit'>Create User</button>
        </form>
    </div>

  )
}

export default Form
