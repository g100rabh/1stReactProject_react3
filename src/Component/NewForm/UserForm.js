import React, { useState } from 'react';

import './UserForm.css'

const UserForm = (props) => {

    const [userName, SetUserName] = useState('');
    const [userAge, SetUserAge] = useState('');
    const [isValid, setIsValid] = useState(true);
    const inputChangeHandler = (event) =>{
        SetUserName(event.target.value)
    }

    const inputAgeChangeHandler = (event) =>{
        SetUserAge(event.target.value)
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        if(userName.trim().length === 0){
            setIsValid(false);
            return PopStateEvent;
        }
        const newUser = {
            uName: userName,
            age: userAge,
            id: Math.random().toString()
        }

        props.onAddUser(newUser);

        SetUserName('');
        SetUserAge('');

    }

    return(
        <form className='form-control' onSubmit={submitHandler}>
            <label>User Name</label>
            <input type='text' onChange={inputChangeHandler} value={userName} />
            <label> Age(years)</label>
            <input type='text' onChange={inputAgeChangeHandler} value={userAge}/>
            <button type="submit">Add User</button>
        </form>
    )
}

export default UserForm;