import React, { useState } from 'react';
import UserSearch from './components/UserSearch';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (name) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`);
      if (!response.ok) {
        throw new Error('Ошибка при получении данных');
      }
      const data = await response.json();
      setUsers(data);
      if (data.length === 0) {
        setError('Пользователи не найдены');
      } else {
        setError(null);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="App">
      <h1>Поиск пользователей</h1>
      <UserSearch onSearch={handleSearch} />
      {error ? <p>{error}</p> : <UserList users={users} />}
    </div>
  );
}

export default App;


