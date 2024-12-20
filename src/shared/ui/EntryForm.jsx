import { useForm } from 'react-hook-form'
import { entryApi } from '@/entities/entry/api/entryApi'

export const EntryForm = ({ entry = {}, onSuccess }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({ defaultValues: entry })

  const onSubmit = async (data) => {
    // Обработка загрузки изображения
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    if (data.image[0]) {
      formData.append('image', data.image[0]) 
    }

    if (entry.id) {
      await entryApi.updateEntry(entry.id, formData)
    } else {
      await entryApi.createEntry(formData)
    }
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Title</label>
      <input {...register('title')} />

      <label>Description</label>
      <textarea {...register('description')} />

      <label>Image</label>
      <input type="file" {...register('image')} />

      {errors.image && <p>{errors.image.message}</p>}

      <button type="submit">{entry.id ? 'Update' : 'Create'}</button>
    </form>
  )
}
