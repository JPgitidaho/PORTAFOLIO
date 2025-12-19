import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Profile from './pages/profile'

export default function App() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
<Route path="/profile" element={<Profile />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </div>
  )
}
