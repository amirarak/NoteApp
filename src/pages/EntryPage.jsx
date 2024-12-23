// src/pages/EntryPage.jsx
import React, { useState } from 'react';

export const EntryPage = ({ onAddEntry }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now().toString(),
      title,
      content,
      image,
    };
    onAddEntry(newEntry);
    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Add New Entry</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ margin: '10px', padding: '8px', width: '200px' }}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={{ margin: '10px', padding: '8px', width: '200px', height: '100px' }}
          />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} style={{ margin: '10px' }} />
          {image && <img src={image} alt="Preview" style={{ width: '100px', height: '100px' }} />}
        </div>
        <div>
          <button type="submit" style={{ marginTop: '10px', padding: '10px 20px' }}>
            Add Entry
          </button>
        </div>
      </form>
    </div>
  );
};
