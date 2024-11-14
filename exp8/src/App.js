import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css'; 
const App = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const res = await axios.get('http://localhost:5000/api/users');
        setUsers(res.data);
    };

    const addUser = async (user) => {
        await axios.post('http://localhost:5000/api/users', user);
        fetchUsers();
    };

    const editUser = async (id, user) => {
        await axios.put(`http://localhost:5000/api/users/${id}`, user);
        setEditingUser(null);
        fetchUsers();
    };

    const handleEdit = (user) => {
      setEditingUser(user); // Set the user to be edited
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:5000/api/users/${id}`);
        fetchUsers();
    };

    return (
        <div>
            <h1>User registration</h1>
            <UserForm onSubmit={editingUser ? (user) => editUser(editingUser._id, user) : addUser} user={editingUser} />
            <UserList users={users} onEdit={handleEdit} onDelete={deleteUser} />
        </div>
    );
};

export default App;
