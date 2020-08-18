import React,{useState} from 'react';
import './App.css';
import {CognitoUserPool} from 'amazon-cognito-identity-js'

const App=()=> {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');



  const poolData ={
    //hidden stuff
  }

  const onSubmit= event =>{
    event.preventDefault()
    UserPool.signUp(email,password,[],null,(err,data)=>{
      if (err)console.error(err);
      console.log(data)
    });
  }

  const UserPool= new CognitoUserPool(poolData)
  return (
    <div >
    <form onSubmit={onSubmit}>
    <input value={email} onChange={event=> setEmail(event.target.value)}/>
    <input value={password} onChange={event=> setPassword(event.target.value)}/>
    <button type="submit">Sign Up</button>
    </form>
    <p>Its loaded</p>
    </div>
  );
}

export default App;
