import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Profile from './pages/profile'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}
