import {CognitoUserPool} from 'amazon-cognito-identity-js'

//this component holds our access data for the account that will hold the user details

  const poolData ={
       UserPoolId:'eu-west-1_dTgL4j3QW', //this is the London region and my identity within that
       ClientId:'2v8ffuv5f723gm38e26rl76c0t'  //this is the individual 'pool' of users held by me
     }

export default new CognitoUserPool(poolData)
