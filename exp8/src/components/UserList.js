import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => (
    <div>
        {users.map((user) => (
            <div key={user._id}>
                <p>{user.name} - {user.email} - {user.phone}</p>
                <button className="edit" onClick={() => onEdit(user)}>Edit</button>
                <button className="delete" onClick={() => onDelete(user._id)}>Delete</button>
            </div>
        ))}
    </div>
);

export default UserList;
