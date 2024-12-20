import { useForm } from 'react-hook-form'
import { entryApi } from '@/entities/entry/api/entryApi'

export const EntryForm = ({ entry = {}, onSuccess }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({ defaultValues: entry })

  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    if (data.image[0]) {
      formData.append('image', data.image[0])
    }

    try {
      if (entry.id) {
        await entryApi.updateEntry(entry.id, formData)
      } else {
        await entryApi.createEntry(formData)
      }
      onSuccess()
    } catch (error) {
      console.error('Error during entry submission:', error)
    }
  }

  const handleImageRemove = () => {
    setValue('image', null) // Убираем изображение из формы
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Title</label>
      <input {...register('title')} />

      <label>Description</label>
      <textarea {...register('description')} />

      <label>Image</label>
      <input type="file" {...register('image')} />
      
      {/* Отображение миниатюры изображения */}
      {entry.image && entry.image[0] && (
        <div>
          <img
            src={URL.createObjectURL(entry.image[0])}
            alt="thumbnail"
            width="100"
          />
          <button type="button" onClick={handleImageRemove}>
            Remove Image
          </button>
        </div>
      )}

      {errors.image && <p>{errors.image.message}</p>}

      <button type="submit">{entry.id ? 'Update' : 'Create'}</button>
    </form>
  )
}
