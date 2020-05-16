import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function Names() {

    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        const res = await axios('api/users');
        setUsers(res.data);
    }

    useEffect(() => {
        fetchUsers();
    })

    const usersList = users.map(user => <li key={user._id}>{user.name} {user.surname}</li>);

    return (
        <ul>
            {usersList}
        </ul>
    )
}
