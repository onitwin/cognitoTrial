import React ,{useState} from 'react'


export default ()=>{
  const [password,setPassword]=useState('');
  const [newPassword,setNewPassword]=useState('');
  const onSubmit=event=>{
    event.preventDefault();
    console.log(password,newPassword)

  }
  return(
    <div>
    <form onSubmit={onSubmit}>
    <input value={password}
    onChange={event=>setPassword(event.target.value)}/>

    <input value={newPassword}
    onChange={event=>setNewPassword(event.target.value)}/>

    <button type= 'submit'>Change Password</button>

    </form>
    </div>
  )
}
