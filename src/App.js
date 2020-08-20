import React from 'react';
import Signup from './components/Signup'
import Login from './components/Login'
import {Account} from './components/Accounts'
import Status from './components/Status';

//this file renders all the other files and nothing more

const App=()=> {
  return (
    <Account >
      <Status/>
      <Signup/>
      <Login/>

    </Account>
  );
}

export default App;
