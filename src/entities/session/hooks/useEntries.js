import { useEffect, useState } from 'react'
import { entryApi } from '@/entities/entry/api/entryApi'

export const useEntries = () => {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchEntries = async () => {
    try {
      setLoading(true)
      const data = await entryApi.getEntries()
      setEntries(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const deleteEntry = async (id) => {
    try {
      await entryApi.deleteEntry(id)  // Убедитесь, что метод deleteEntry правильно реализован в entryApi
      setEntries(entries.filter(entry => entry.id !== id)) // Обновление списка после удаления
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    fetchEntries()
  }, [])

  return { entries, loading, error, refresh: fetchEntries, deleteEntry }
}
