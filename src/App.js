import React from 'react';
import Signup from './components/Signup'
import Login from './components/Login'
import {Account} from './components/Accounts'


const App=()=> {
  return (
    <Account >
    <Signup/>
    <Login/>

    </Account>
  );
}

export default App;
