import React from 'react';

import './App.css';

import Users from './component/users'
import User from './component/randomUser'



function App() { 
  return (
    <div className="App" >
    <User/><br></br>
    <Users/>
  
    </div>
  );
}

export default App;