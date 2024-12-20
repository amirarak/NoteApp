export { entryApi } from './api/entryApi'
export { ENTRY_ERRORS } from './model/constants'

import { entryApi } from '@entities/entry'

// Fetch entry
const entries = await entryApi.getEntries()

// Create entry
const newEntry = await entryApi.createEntry({
  title: 'New Entry',
  completed: false,
})

// Update entry
const updatedEntry = await entryApi.updateEntry(1, {
  completed: true,
})

// Delete entry
await entryApi.deleteEntry(1)