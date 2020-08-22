import React from 'react';
import Signup from './components/Signup'
import Login from './components/Login'
import {Account} from './components/Accounts'
import Status from './components/Status';
import Settings from './components/Settings'
import ForgotPassword from './components/ForgotPassword'

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

    </Account>
  );
}

export default App;
