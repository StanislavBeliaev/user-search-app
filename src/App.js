import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserSearch from './components/UserSearch';
import UserList from './components/UserList';
import { fetchUsers } from './store';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  const handleSearch = (name) => {
    dispatch(fetchUsers(name));
  };

  return (
    <div className="App">
      <h1>Поиск пользователей</h1>
      <UserSearch onSearch={handleSearch} />
      {loading && <p>Загрузка...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <UserList users={users} />}
    </div>
  );
}

export default App;


