// src/pages/UserPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EntryPage } from './EntryPage';

export const UserPage = () => {
  const [entries, setEntries] = useState([]); // Хранение записей
  const [isAddingEntry, setIsAddingEntry] = useState(false); // Показ формы добавления записи

  const handleAddEntry = (newEntry) => {
    const newEntryWithId = { ...newEntry, id: Date.now().toString() }; // Генерация уникального id
    setEntries((prevEntries) => [...prevEntries, newEntryWithId]); // Добавляем новую запись в массив
    setIsAddingEntry(false); // Закрываем форму
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to your dashboard!</h1>
      <p>This is your personal space where you can manage your account.</p>

      <Link to="/all-entries">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          View All Entries
        </button>
      </Link>

      {!isAddingEntry ? (
        <>
          <button onClick={() => setIsAddingEntry(true)}>
            Add New Entry
          </button>

          <h2>Your Entries</h2>
          <ul>
            {entries.map((entry) => (
              <li key={entry.id}>
                <h3>{entry.title}</h3>
                <p>{entry.content}</p>
                {entry.image && <img src={entry.image} alt="Entry Image" style={{ width: '200px', height: 'auto' }} />}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <EntryPage onAddEntry={handleAddEntry} />
      )}
    </div>
  );
};
