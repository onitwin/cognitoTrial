import React,{useState,useContext} from 'react';
import {CognitoUser,AuthenticationDetails} from 'amazon-cognito-identity-js'
import UserPool from '../UserPool'
import {AccountContext} from './Accounts'


const Login=()=> {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  //receivers for username and password from the form- this is passed in
  //to the authenticate call.

  const {authenticate}=useContext(AccountContext)


  //submit event uses the 'authenticate' context from 'AccountContext'(Accounts) to construct
  //a request to Amazon Cognito services with email and password passed in
  //before logging the responce


  const onSubmit= event =>{
    event.preventDefault()
    authenticate(email,password)
    .then(data=>{
      console.log('Logged in!',data)
    })
    .catch(err=>{
      console.error("Failed to log in",err);
    })



}


return (
  <div >
  <form onSubmit={onSubmit}>
  <input value={email} onChange={event=> setEmail(event.target.value)}/>
  <input value={password} onChange={event=> setPassword(event.target.value)}/>
  <button type="submit">Log In</button>
  </form>
  <p>This is the LOGIN component</p>
  </div>
);
}

export default Login
