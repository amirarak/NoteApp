import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [redirect, setRedirect] = useState(false); // Состояние для управления редиректом

  const handleSubmit = (e) => {
    e.preventDefault(); // Останавливаем стандартное поведение формы
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registration successful:', { email, password });
    alert('Registration completed successfully!');
    setRedirect(true); // Устанавливаем флаг для редиректа
  };

  // Если redirect = true, перенаправляем пользователя на страницу логина
  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Register</h1>
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
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ margin: '10px', padding: '8px', width: '200px' }}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px', padding: '10px 20px' }}>
          Register
        </button>
      </form>
    </div>
  );
};
