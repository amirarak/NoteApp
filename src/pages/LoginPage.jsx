// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios'; // Импортируем axios

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Стейт для ошибок

  const handleSubmit = async (e) => {
    e.preventDefault(); // Останавливаем стандартное поведение формы

    try {
      // Отправляем запрос на сервер для логина
      const response = await axios.post('https://your-api-url/login', {
        email,
        password,
      });

      if (response.data.token) {
        // Если получили токен, сохраняем его в localStorage
        localStorage.setItem('token', response.data.token);
        // Перенаправляем пользователя на страницу пользователя
        window.location.href = '/user'; // Переход на страницу пользователя
      } else {
        setError('Invalid credentials'); // Если нет токена, показываем ошибку
      }
    } catch (error) {
      setError('Login failed. Please try again.'); // Показываем ошибку, если запрос не удался
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ margin: '10px', padding: '8px', width: '200px' }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ margin: '10px', padding: '8px', width: '200px' }}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px', padding: '10px 20px' }}>
          Login
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Отображаем ошибку */}
    </div>
  );
};
