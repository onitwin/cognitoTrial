import React from 'react';
import Signup from './components/Signup'
import Login from './components/Login'
import {Account} from './components/Accounts'
import Status from './components/Status';
import Settings from './components/Settings'
import ForgotPassword from './components/ForgotPassword'
import Attributes from './components/Attributes'
// import RandomNumber from './components/RandomNumber' tutorial required lambda- not set up currently
//once set up add <RandomNumber/> below <Attributes/>

//this file renders all the other files and nothing more

const App=()=> {
  return (
    <Account >
    <p>Current emaill address for testing is hotmail, password is Password1!</p>
      <Status/>
      <Signup/>
      <Login/>
      <ForgotPassword/>
      <Settings/>
      <Attributes/>

    </Account>
  );
}

export default App;
