// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { UserPage } from './pages/UserPage';
import { EntryPage } from './pages/EntryPage';
import { AllEntriesPage } from './pages/AllEntriesPage';

function App() {
  const [entries, setEntries] = useState([]); // Массив записей

  const addEntry = (newEntry) => {
    setEntries((prevEntries) => [...prevEntries, newEntry]); // Добавляем новую запись
  };

  const deleteEntry = (id) => {
    setEntries((prevEntries) => prevEntries.filter(entry => entry.id !== id)); // Удаляем запись
  };

  const editEntry = (id, updatedEntry) => {
    setEntries((prevEntries) => prevEntries.map(entry => entry.id === id ? { ...entry, ...updatedEntry } : entry));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/add-entry" element={<EntryPage onAddEntry={addEntry} />} />
        <Route path="/all-entries" element={<AllEntriesPage entries={entries} onDeleteEntry={deleteEntry} onEditEntry={editEntry} />} />
      </Routes>
    </Router>
  );
}

export default App;
