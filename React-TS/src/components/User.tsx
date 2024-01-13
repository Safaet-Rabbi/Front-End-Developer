import React from 'react';
type UserProps ={
   user: {
    name: string;
    age:number;
    isRegistered: boolean;
    lang: string[];
   }
}

const User = ({user}: UserProps) => {
  return (
    <div style={{border:"1px solid",margin:"0.5rem" }}>
        <h2>{user.name} </h2>
        <p>{user.age} years old </p>
        {user.isRegistered? <p>Registered User</p> : <p>Not Registered User</p> }
        <p>
            Speaks:
            {user.lang.map((lang,index)=>{
                return <span key={index}>{lang} </span>
            })}
        </p>
      
    </div>
  )
}

export default User
