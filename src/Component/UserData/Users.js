import React from 'react';

import './Users.css'
import UserList from './UserList';

const Users = (props) => {

    return (
        <ul className='data'>
            {props.user.map( (i) => 
                <UserList key = {i.id}
                uName={i.uName}
                age={i.age}>
                </UserList>
            )}
        </ul>
    )
}

export default Users;