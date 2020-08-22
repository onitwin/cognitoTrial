import React ,{useState} from 'react'
import Pool from '../UserPool'
import {CognitoUser,AuthenticationDetails} from 'amazon-cognito-identity-js'

export default()=>{
  const [stage,setStage]=useState(1); //1=email stage, 2=code stage
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [code, setCode]=useState('');
  const [confirmPassword, setConfirmPassword]=useState('');

  const getUser=()=>{
    return new CognitoUser({
      Username:email.toLowerCase(),
      Pool
    })
  }

  const sendCode=event=>{
    event.preventDefault();
    getUser().forgotPassword({
      onSuccess:data=>{
        console.log("Success:",data)
      },
      onFailure:err=>{
          console.error("Failure:",err)
      },
      inputVerificationCode:data=>{
          console.log("Input Code:",data)
          setStage(2)
      }
    })

  }

  const resetPassword=event=>{
    event.preventDefault();

    if(password !== confirmPassword){
      console.error("Passwords are not the same")
      return;
    }

    getUser().confirmPassword(code,password,{
      onSuccess:data=>{
        console.log("Success:",data)
      },
      onFailure:err=>{
          console.error("Failure:",err)
      },
    })

  }

  return(
    <div>
    {stage == 1 && (
      <form onSubmit={sendCode}>
      <input value={email} onChange={event=>setEmail(event.target.value)}/>
      <button type='submit'>Send verification code</button>
      </form>
    )}

    {stage == 2 &&(
      <div>
      <form onSubmit={resetPassword}>
      <input value={code} onChange={event=>setCode(event.target.value)}/>
      <input value={password} onChange={event=>setPassword(event.target.value)}/>
      <input value={confirmPassword} onChange={event=>setConfirmPassword(event.target.value)}/>
      <button type='submit'>Change Password</button>
      </form></div>
    )}
    </div>
  )
}
