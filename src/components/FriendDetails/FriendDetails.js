import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = (props) => {
    const {friendId} = useParams()
    const [friends, setFriends] = useState({})
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res =>res.json())
        .then(data => setFriends(data))
    },[])
    console.log(friendId)
    return (
        <div>
           <h1>Friends id: {friendId}</h1>
           <h1>{friends.name}</h1>
           <h1>{friends.email}</h1>
        </div>
    );
};

export default FriendDetails;