export { noteApi } from './api/noteApi'
export { NOTE_ERRORS } from './model/constants'

import { noteApi } from '@entities/note'

// Fetch notes
const notes = await noteApi.getNotes()

// Create note
const newNote = await noteApi.createNote({
  title: 'New Note',
  completed: false,
})

// Update note
const updatedNote = await todoApi.updateNote(1, {
  completed: true,
})

// Delete note
await noteApi.deleteNote(1)