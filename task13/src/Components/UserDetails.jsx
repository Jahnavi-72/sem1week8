import React from 'react';
import { useParams } from 'react-router-dom';

const userData = {
  1: { name: 'Alice', age: 25, email: 'alice@example.com' },
  2: { name: 'Bob', age: 30, email: 'bob@example.com' },
  3: { name: 'Charlie', age: 22, email: 'charlie@example.com' },
};

const UserDetails = () => {
  const { id } = useParams(); 
  const user = userData[id]; 

  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetails;
