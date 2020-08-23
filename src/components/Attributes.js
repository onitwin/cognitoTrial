//this is optional file for managing addtributes of users (e.g. birthdat, locale, picture etc.)
import React, {useEffect, useContext, useState} from 'react'
import {CognitoUserAttribute} from 'amazon-cognito-identity-js'
import {AccountContext} from "./Accounts"

//this is example and not needed for all versions
export default ()=>{
  const [plan,setPlan]=useState('')

  const {getSession} =useContext(AccountContext)

  useEffect(()=>{
    getSession().then(data=>{
      console.log("DATA:",data)
      // setPlan(data:"custom:plan") custome attributes not populating so comment out till resolved
    })
  },[])

  const onSubmit=event=>{
    event.preventDefault()
    getSession().then(({user})=>{
      const attributes=[
        new CognitoUserAttribute({Name:'fish',Value: plan})
      ];//name refers to custom plan on AWS, Value referes to plan in state

        user.updateAttributes(attributes,(err,result)=>{
          if(err)console.error(err);
          console.log(result)
        })
    })
  }

  return(
    <div>
    <h1>Update your plan</h1>
    <form onSubmit={onSubmit}>
    <input value={plan} onChange={event=>setPlan(event.target.value)}/>
    <button type="submit">Change Plan </button>
    </form>
    </div>
  )
}
