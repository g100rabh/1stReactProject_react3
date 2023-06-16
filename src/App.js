import React, { useState } from 'react';
import './App.css';

import Users from './Component/UserData/Users';
import UserForm from './Component/NewForm/UserForm';


function App() {

  let InitialUserData = [];

  const [userData, setUserData] = useState(InitialUserData);

  const addUSer = (userData) => {
    
    setUserData((prevUserData)=> {
      return [userData, ...prevUserData]
    });
  }
  console.log(userData)

  return (
    <div>
      <UserForm onAddUser={addUSer}/>
      <Users user = {userData} />
    </div>
  );
}

export default App;
