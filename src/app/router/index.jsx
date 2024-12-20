import { createBrowserRouter, redirect } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { LoginPage } from '@/pages/LoginPage'
import { RegisterPage } from '@/pages/RegisterPage'
import { EntryList } from '@/entities/entry/ui/EntryList'
import { EntryForm } from '@/entities/entry/ui/EntryForm'
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

// Объединяем все маршруты
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    loader: authLoader,
  },
  {
    path: '/login',
    element: <LoginPage />,
    loader: guestLoader,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    loader: guestLoader,
  },
  {
    path: '/entries',
    element: <EntryList />,
    loader: authLoader, 
  },
  {
    path: '/entries/new',
    element: <EntryForm />,
    loader: authLoader, 
  },
  {
    path: '/entries/:id/edit',
    element: <EntryForm />,
    loader: authLoader, 
  },
])
