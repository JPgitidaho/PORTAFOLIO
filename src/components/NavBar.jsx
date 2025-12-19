import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const links = [
    { label: 'Inicio', path: '/' },
    { label: 'Proyectos', path: '/projects' },
    { label: 'Habilidades', path: '/skills' },
    { label: 'Contacto', path: '/contact' }
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-6 text-white">
        {links.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `text-sm md:text-base transition ${
                isActive
                  ? 'text-cyan-400 font-semibold'
                  : 'text-gray-300 hover:text-cyan-300'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
