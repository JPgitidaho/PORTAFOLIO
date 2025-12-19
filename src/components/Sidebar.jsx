import { NavLink } from 'react-router-dom'
import { FaHome, FaFolderOpen, FaUser, FaTools } from 'react-icons/fa'

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-20 md:w-48 bg-white/10 backdrop-blur-lg border-r border-white/20 shadow-lg z-50 flex flex-col items-center py-6 space-y-6 text-white">
      
      <div className="text-2xl font-bold tracking-wide text-cyan-400">JP</div>

      <nav className="flex flex-col space-y-4 mt-10 w-full px-2">
        
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 py-2 px-4 rounded-lg transition-all duration-300 ${
              isActive ? 'bg-cyan-600 text-white' : 'hover:bg-cyan-500/40'
            }`
          }
        >
          <FaHome className="text-lg" />
          <span className="hidden md:inline">Inicio</span>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex items-center gap-2 py-2 px-4 rounded-lg transition-all duration-300 ${
              isActive ? 'bg-cyan-600 text-white' : 'hover:bg-cyan-500/40'
            }`
          }
        >
          <FaFolderOpen className="text-lg" />
          <span className="hidden md:inline">Proyectos</span>
        </NavLink>

       
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-2 py-2 px-4 rounded-lg transition-all duration-300 ${
              isActive ? 'bg-cyan-600 text-white' : 'hover:bg-cyan-500/40'
            }`
          }
        >
          <FaUser className="text-lg" />
          <span className="hidden md:inline">Perfil</span>
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `flex items-center gap-2 py-2 px-4 rounded-lg transition-all duration-300 ${
              isActive ? 'bg-cyan-600 text-white' : 'hover:bg-cyan-500/40'
            }`
          }
        >
          <FaTools className="text-lg" />
          <span className="hidden md:inline">Habilidades</span>
        </NavLink>

      </nav>
    </aside>
  )
}
