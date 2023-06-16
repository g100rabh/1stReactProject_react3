

import './UserList.css';

const UserList = (props) => {

    return (
        <span className='span'>{props.uName}{` (${props.age} years old)`}</span>
    )
}

export default UserList;