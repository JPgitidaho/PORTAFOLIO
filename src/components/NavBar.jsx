import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
const links = [
  { label: 'Inicio', path: '/' },
  { label: 'Proyectos', path: '/projects' },
  { label: 'Perfil', path: '/profile' },
  { label: 'Habilidades', path: '/skills' }
]


  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        
       
        <Link to="/" className="text-2xl font-bold text-cyan-400 tracking-tight hover:scale-105 transition-transform">
          JP.dev
        </Link>

     
        <ul className="flex gap-4 md:gap-8 text-white font-medium text-sm md:text-base">
          {links.map(({ label, path }, i) => (
            <li key={i}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition-colors duration-300 px-2 py-1 border-b-2 ${
                    isActive
                      ? 'border-cyan-400 text-cyan-400'
                      : 'border-transparent hover:border-cyan-400 hover:text-cyan-300'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
