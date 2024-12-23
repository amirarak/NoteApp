// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Здесь можно заменить на реальную проверку

  const handleLogin = () => navigate('/login');
  const handleRegister = () => navigate('/register');
  const handleLogout = () => {
    setIsAuthenticated(false);
    console.log('User logged out');
    // Дополнительная логика для выхода, например, удаление токена
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Home Page</h1>
      {isAuthenticated ? (
        <>
          <p>You are logged in!</p>
          <button onClick={handleLogout} style={{ margin: '5px', padding: '10px 20px' }}>
            Logout
          </button>
        </>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <button onClick={handleLogin} style={{ margin: '5px', padding: '10px 20px' }}>
            Login
          </button>
          <button onClick={handleRegister} style={{ margin: '5px', padding: '10px 20px' }}>
            Register
          </button>
        </div>
      )}
    </div>
  );
};
