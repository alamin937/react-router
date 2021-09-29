import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'
const Friend = (props) => {
    const {id,name,email, address} = props.user
    let history = useHistory()
    const user = `/friend/${id}`

    const handleFriend = () =>{
        history.push(user)
    }
    return (
        <div className='friend'>
            <h1>Name: {name}</h1>
            <h5>email: {email}</h5>
            <h5>address: {address.street}</h5>
            <Link to={user}>Details</Link>
            <button onClick={handleFriend}>visit me</button>
        </div>
    );
};

export default Friend;