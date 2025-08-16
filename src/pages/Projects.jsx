const projects = [
  {
  title: 'Auth + Búsqueda Reactiva',
  description: 'React + TypeScript: Context API (autenticación), RxJS (debounce), OpenAPI y deploy en Netlify (CI/CD).',
  image: '/assets/Netlify.png',          
  span: 'lg:col-span-2 lg:h-64',           
  demo: 'https://inspiring-starship-02bf80.netlify.app/',
  code: 'https://github.com/JPgitidaho/TU_REPO' 
},
{
    title: 'Crecer-Marketing',
    description: 'Projecto freelance para agencia de Marketing. Pagina con filtros y modo responsivo React + Tailwind.',
    image: '/assets/crecer-marketing2.png',
    span: 'lg:h-64',
    demo: 'https://crecermarketing.vercel.app/',
    code: 'https://github.com/JPgitidaho/crecermarketing'
  },


  {
    title: 'Hotel',
    description: 'Pagina con filtros y modo responsivo React + Tailwind.',
    image: '/assets/hotel.png',
    span: 'lg:col-span-2 lg:row-span-1 lg:h-64',
    demo: 'https://react-app-hotel.vercel.app/',
    code: 'https://github.com/JPgitidaho/React-app-hotel'
  },
  {
    title: 'App de Recetas',
    description: 'Busca recetas por ingredientes y guarda tus favoritas.',
    image: '/assets/app-meal.png',
    span: 'lg:row-span-2 lg:h-[500px]',
    demo: 'https://proyect-meal-app.vercel.app/',
    code: 'https://github.com/JPgitidaho/proyect-Meal-App'
  },
  {
    title: 'Chamber of Comerce',
    description: 'Pagina con filtros y modo responsivo CSS+HTML+JS.',
    image: '/assets/chamber.png',
    span: '',
    demo: 'https://jpgitidaho.github.io/Chamber-of-Commerce-Project/',
    code: 'https://github.com/JPgitidaho/Chamber-of-Commerce-Project'
  },
  {
    title: 'Clone Figma Design',
    description: 'Pagina creada deacuerdo a diseño de Figma. Seguimiento de especificaciones y fiel al detalle.',
    image: '/assets/figma-project.png',
    span: '',
    demo: 'https://app-react-3.vercel.app/',
    code: 'https://github.com/JPgitidaho/app-react-3'
  },
  {
    title: 'Galeria de E-comerce',
    description: 'E-commerce-peticion de Api.',
    image: '/assets/proyecto-funval-3.png',
    span: 'lg:col-span-2 lg:h-64',
    demo: 'https://proyecto-funval-react3.vercel.app/',
    code: 'https://github.com/JPgitidaho/proyecto-funval-react3'
  },
  {
    title: 'Clone-Snap',
    description: 'Pagina creada deacuerdo a diseño de Figma. Seguimiento de especificaciones y fiel al detalle.',
    image: '/assets/Clon-SNAP.png',
    span: 'lg:h-64',
    demo: 'https://proyect-react-funval2.vercel.app/',
    code: 'https://github.com/JPgitidaho/proyect-react-funval2'
  },
]

export default function Projects() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-24 bg-[#0f172a] text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-cyan-400">
        Proyectos Destacados
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[240px] gap-6">
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
                <a href={proj.demo} target="_blank" className="text-cyan-400 hover:underline text-sm">Demo</a>
                <a href={proj.code} target="_blank" className="text-cyan-400 hover:underline text-sm">Código</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
