import { useEffect } from 'react'
import { useEntries } from '@/entities/entry/hooks/useEntries'

export const EntryList = () => {
  const { entries, fetchEntries, deleteEntry, loading, error } = useEntries()

  useEffect(() => {
    fetchEntries()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Entries</h1>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <span>{entry.title}</span>
            <button
              onClick={() => {
                if (confirm('Are you sure you want to delete this entry?')) {
                  deleteEntry(entry.id)
                }
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
