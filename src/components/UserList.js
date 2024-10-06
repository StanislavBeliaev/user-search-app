import React from 'react';
import User from './User';

function UserList({ users }) {
  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => <User key={user.id} user={user} />)
      ) : (
        <p>Пользователи не найдены</p>
      )}
    </div>
  );
}

export default UserList;
