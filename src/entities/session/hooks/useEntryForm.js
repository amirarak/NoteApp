import { useState } from 'react'
import { entryApi } from '@/entities/entry/api/entryApi'

export const useEntryForm = (entry = {}, onSuccess) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const submitEntry = async (data) => {
    try {
      setIsSubmitting(true)
      if (entry.id) {
        await entryApi.updateEntry(entry.id, data) // Редактирование
      } else {
        await entryApi.createEntry(data) // Создание
      }
      onSuccess()
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { submitEntry, isSubmitting, error }
}
