import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { EntryList } from '@/shared/ui/EntryList'
import { EntryForm } from '@/shared/ui/EntryForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/entries" element={<EntryList />} />
        <Route path="/entries/new" element={<EntryForm />} />
        <Route path="/entries/:id/edit" element={<EntryForm />} />
      </Routes>
    </Router>
  )
}

export default App
