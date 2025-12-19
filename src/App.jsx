import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Profile from './pages/profile'
import Skills from './pages/Skills'
import Contact from './pages/Contact'


export default function App() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      <NavBar />
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </main>
    </div>
  )
}
