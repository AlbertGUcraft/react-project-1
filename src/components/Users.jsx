import React, { useState, useEffect } from 'react';
import '../index.css';
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

const UserCard = ({ user }) => {
  const { first_name, last_name, email, avatar } = user;

  return (
    <div className="user-card">
      <div>
        <img src={avatar} alt={`${first_name} ${last_name}`} />
        <h3>{`${first_name} ${last_name}`}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Users;
