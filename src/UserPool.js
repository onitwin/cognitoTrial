import {CognitoUserPool} from 'amazon-cognito-identity-js'

  const poolData ={
       UserPoolId:'eu-west-1_dTgL4j3QW',
       ClientId:'2v8ffuv5f723gm38e26rl76c0t'
     }

export default new CognitoUserPool(poolData)
