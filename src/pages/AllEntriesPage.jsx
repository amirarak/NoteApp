// src/pages/AllEntriesPage.jsx
import React, { useState } from 'react';

export const AllEntriesPage = ({ entries, onDeleteEntry, onEditEntry }) => {
  const [editingEntryId, setEditingEntryId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedContent, setUpdatedContent] = useState('');
  const [updatedImage, setUpdatedImage] = useState(null);

  const handleEditClick = (entry) => {
    setEditingEntryId(entry.id);
    setUpdatedTitle(entry.title);
    setUpdatedContent(entry.content);
    setUpdatedImage(entry.image);
  };

  const handleCancelEdit = () => {
    setEditingEntryId(null);
    setUpdatedTitle('');
    setUpdatedContent('');
    setUpdatedImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUpdatedImage(URL.createObjectURL(file));
    }
  };

  const handleEditSubmit = (e, entryId) => {
    e.preventDefault();
    const updatedEntry = {
      id: entryId,
      title: updatedTitle,
      content: updatedContent,
      image: updatedImage,
    };
    onEditEntry(entryId, updatedEntry);
    setEditingEntryId(null); // Закрываем форму редактирования
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>All Entries</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {entries.length > 0 ? (
          entries.map((entry) => (
            <li key={entry.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              {editingEntryId === entry.id ? (
                // Форма для редактирования записи
                <form onSubmit={(e) => handleEditSubmit(e, entry.id)} style={{ textAlign: 'left' }}>
                  <div>
                    <label>Title:</label>
                    <input
                      type="text"
                      value={updatedTitle}
                      onChange={(e) => setUpdatedTitle(e.target.value)}
                      required
                      style={{ margin: '10px', padding: '8px', width: '200px' }}
                    />
                  </div>
                  <div>
                    <label>Content:</label>
                    <textarea
                      value={updatedContent}
                      onChange={(e) => setUpdatedContent(e.target.value)}
                      required
                      style={{ margin: '10px', padding: '8px', width: '200px', height: '100px' }}
                    />
                  </div>
                  <div>
                    <label>Image:</label>
                    <input type="file" onChange={handleImageChange} style={{ margin: '10px' }} />
                    {updatedImage && <img src={updatedImage} alt="Preview" style={{ width: '100px', height: '100px' }} />}
                  </div>
                  <div>
                    <button type="submit" style={{ marginTop: '10px', padding: '10px 20px' }}>
                      Save Changes
                    </button>
                    <button type="button" onClick={handleCancelEdit} style={{ marginLeft: '10px' }}>
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                // Отображение записи
                <>
                  <h3>{entry.title}</h3>
                  <p>{entry.content}</p>
                  {entry.image && <img src={entry.image} alt="Entry Image" style={{ width: '200px', height: 'auto' }} />}
                  <div>
                    {/* Кнопка для редактирования */}
                    <button onClick={() => handleEditClick(entry)} style={{ marginRight: '10px' }}>
                      Edit
                    </button>
                    {/* Кнопка для удаления */}
                    <button onClick={() => onDeleteEntry(entry.id)}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))
        ) : (
          <p>No entries available</p>
        )}
      </ul>
    </div>
  );
};
