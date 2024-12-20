import { createBrowserRouter, redirect } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { LoginPage } from '@/pages/LoginPage'
import { RegisterPage } from '@/pages/RegisterPage'
import { sessionApi } from '@/entities/session/api/sessionApi'

// Loader для защищенных маршрутов
const authLoader = async () => {
  try {
    await sessionApi.check()
    return null
  } catch (error) {
    return redirect('/login')
  }
}

// Loader для гостевых маршрутов
const guestLoader = async () => {
  try {
    await sessionApi.check()
    return redirect('/')
  } catch (error) {
    return null
  }
}

// Маршруты
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    loader: authLoader 
  },
  {
    path: '/login',
    element: <LoginPage />,
    loader: guestLoader 
  },
  {
    path: '/register',
    element: <RegisterPage />,
    loader: guestLoader 
  }
])
