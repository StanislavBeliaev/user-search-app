import React, { useState, useCallback } from 'react';

function UserSearch({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = useCallback(() => {
    const trimmedInput = input.trim();
    if (trimmedInput) {
      onSearch(trimmedInput);
    }
  }, [input, onSearch]);

  const handleOnChange = useCallback((e) => {
    setInput(e.target.value);
  }, [setInput]);

  return (
    <div>
      <input
        type="text"
        placeholder="Введите имя пользователя"
        value={input}
        onChange={handleOnChange}
      />
      <button onClick={handleSearch}>Поиск</button>
    </div>
  );
}

export default UserSearch;
