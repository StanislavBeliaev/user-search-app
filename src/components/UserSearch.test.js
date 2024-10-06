import { render, screen, fireEvent } from '@testing-library/react';
import UserSearch from './UserSearch.js';

test('renders input and button', () => {
  render(<UserSearch onSearch={() => {}} />);
  const inputElement = screen.getByPlaceholderText(/Введите имя пользователя/i);
  const buttonElement = screen.getByText(/Поиск/i);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('calls onSearch when button is clicked', () => {
  const onSearchMock = jest.fn();
  render(<UserSearch onSearch={onSearchMock} />);
  const inputElement = screen.getByPlaceholderText(/Введите имя пользователя/i);
  fireEvent.change(inputElement, { target: { value: 'John' } });
  const buttonElement = screen.getByText(/Поиск/i);
  fireEvent.click(buttonElement);
  expect(onSearchMock).toHaveBeenCalledWith('John');
});
