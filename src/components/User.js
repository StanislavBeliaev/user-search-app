import React from 'react';

function User({ user }) {
  return (
    <div className="user">
      <img
        className="img"
        src={`https://robohash.org/${user.id}?set=set5`}
        alt={`${user.name}`}
      />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

export default User;
