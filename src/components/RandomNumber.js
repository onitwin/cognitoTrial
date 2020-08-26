import React,{useState,useContext} from 'react'
import rp from "request-promise"
import {AccountContext} from './Accounts'


export default ()=>{
  const [number,setNumber]=useState(0)

  const {getSession} =useContext(AccountContext)

  const fetchNumber ()=>{
    getSession().then(async({headers})=>{ //headers destructured from AccountContext
      const url="stuff"//url goes here
      const number=await rp(url,headers) //headers then passed in
      setNumber(number)
    })

    const number=rp(url)
    setNumber(number)

  }

  return(
    <div>
    <div>Random Number:{number}</div>
    <button onClick={fetchNumber}>Fetch new number</button>
    </div>
  )
}
