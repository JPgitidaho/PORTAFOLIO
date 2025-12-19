const projects = [

  {
    title: 'Crecer-Marketing',
    description: 'Sitio web desarrollado para una agencia de marketing, enfocado en presentar servicios y facilitar la navegación del usuario. Diseño responsivo con filtros de contenido y estructura clara orientada a negocio.',
    image: '/assets/crecer-marketing-img.png',
    span: 'lg:col-span-2 lg:row-span-1 lg:h-64',
    demo: 'https://crecermarketing-web.vercel.app/',
    code: 'https://github.com/JPgitidaho/crecermarketing'
  },


  {
    title: 'Hotel',
    description: 'Sitio web responsivo para hotel, con sistema de filtros para búsqueda de información. Desarrollo enfocado en usabilidad, navegación clara y adaptación a distintos dispositivos.',
    image: '/assets/hotel.png',
    span: 'lg:col-span-3 lg:h-64',
    demo: 'https://react-app-hotel.vercel.app/',
    code: 'https://github.com/JPgitidaho/React-app-hotel'
  },

  {
    title: 'SleepOutside',
    description: 'E-commerce web con consumo de API para visualización dinámica de productos. Implementación orientada a funcionalidad, estructura clara y experiencia de usuario.',
    image: '/assets/sleep-outside.png',
    span: 'lg:col-span-3 lg:h-64',
    demo: 'https://personal-sleep-outside.netlify.app/',
    code: 'https://github.com/JPgitidaho/wdd330personal-sleep-outside'
  },
  {
    title: 'Auth + Búsqueda Reactiva',
    description: 'Aplicación web con sistema de autenticación y búsqueda reactiva. Implementación de Context API, debounce para optimizar búsquedas y despliegue automatizado.',
    image: '/assets/Netlify.png',
    span: 'lg:col-span-2 lg:h-64',
    demo: 'https://inspiring-starship-02bf80.netlify.app/',
    code: 'https://github.com/JPgitidaho/Proyect-Netlify'
  }

]

export default function Projects() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-24 bg-[#0f172a] text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-cyan-400">
        Proyectos Destacados
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 auto-rows-[240px] gap-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl group ${proj.span}`}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white">{proj.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{proj.description}</p>
              <div className="flex gap-4">
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline text-sm"
                >
                  Ver sitio
                </a>
                <a
                  href={proj.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline text-sm"
                >
                  Ver código
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
