import React,{useState} from 'react';
import UserPool from '../UserPool'


const Signup=()=> {
  const [email,setEmail]=useState(''); //recieves email from form
  const [password,setPassword]=useState(''); //recieves password from form


  //submit event uses the 'signup' meythod from 'UserPool' to construct
  //a request to Amazon Cognito services with email and password
  //as payload

  const onSubmit= event =>{
    event.preventDefault()
    UserPool.signUp(email,password,[],null,(err,data)=>{
      if (err)console.error(err);
      console.log(data)
    });
  }


  return (
    <div >
    <form onSubmit={onSubmit}>
    <input value={email} onChange={event=> setEmail(event.target.value)}/>
    <input value={password} onChange={event=> setPassword(event.target.value)}/>
    <button type="submit">Sign Up</button>
    </form>
    </div>
  );
}

export default Signup
