import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { sessionApi } from '@/entities/session/api/sessionApi'
import { registerSchema } from '@/entities/session/model/schema'

export const useRegisterForm = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = async (data) => {
    try {
      await sessionApi.register(data) // Вызов метода регистрации
      navigate('/') // Переход на главную страницу после успешной регистрации
    } catch (error) {
      setError('root', {
        message: error.message
      })
    }
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting
  }
}
