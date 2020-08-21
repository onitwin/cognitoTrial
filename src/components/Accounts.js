//creating context for accounts to allow import across rest of program anyway we like
import React,{createContext} from 'react';
import {CognitoUser,AuthenticationDetails} from 'amazon-cognito-identity-js'
import Pool from '../UserPool'
const AccountContext = createContext();

const Account =props=>{
  const getSession=async ()=>
  await new Promise((resolve,reject)=>{
    const user=Pool.getCurrentUser();
    if (user){
      user.getSession(async(err,session)=>{
        if(err){
          reject();
        }else{
          const attributes= await new Promise((resolve,reject)=>{
            user.getUserAttributes((err,attributes)=>{ //obtains extra user information when submitting session request (e.g, email address)
              if(err){
                reject(err)
              }else{
                const results={};

                for (let attribute of attributes){
                  const {Name,Value}=attribute;
                  results[Name]=Value;
                }
                resolve(results)
              }
            })
          })
          resolve({
            user,
            ...session,
            ...attributes
          });
        }
      })
    }else{
      reject();
    }
  })


  const authenticate = async (Username,Password)=> //authenticate is the result of passing in stored user details and submitting to Amazon for appraisal
  await new Promise((resolve,reject)=>{
    const user= new CognitoUser({Username,Pool}); //new user details are created from existing details??
    const authDetails= new AuthenticationDetails({Username,Password})

    user.authenticateUser(authDetails,{
      onSuccess:data=>{
        console.log("onSuccess:",data);
        resolve(data)
      },

      onFailure:err=>{
        console.error('onFailure',err);
        reject(err)
      },

      newPasswordRequired:data=>{
        console.log('newPasswordRequired',data);
        resolve(data)
      }
    })
  })

  const logout=()=>{
    const user =Pool.getCurrentUser();
    if (user){
      user.signOut();
    }
  }

  return(
    <AccountContext.Provider value={{
      authenticate,
      getSession,
      logout
    }}>
    {props.children}
    </AccountContext.Provider>
  );
};

export  {Account, AccountContext};
