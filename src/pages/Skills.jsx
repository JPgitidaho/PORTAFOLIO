import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt
} from 'react-icons/fa'
import {
  SiTailwindcss, SiPython
} from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-2xl" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600 text-2xl" /> }
]

export default function Skills() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-cyan-400 text-center">
        Habilidades Técnicas
      </h2>
      <div className="mt-4 max-w-2xl text-center text-gray-300 text-sm leading-relaxed">
        <h3 className="text-cyan-400 font-semibold mb-3">
          Qué puedo aportar
        </h3>
        <p>
          Desarrollo interfaces web claras y responsivas, implemento componentes reutilizables con React
          y trabajo con buenas prácticas de estructura, estilos y control de versiones. Me enfoco en
          usabilidad, mantenimiento del código y experiencia de usuario.
        </p>
        <div className="mt-20 max-w-3xl text-center text-gray-300 text-sm leading-relaxed">
          <h3 className="text-cyan-400 font-semibold mb-3">
            Habilidades técnicas y enfoque de desarrollo
          </h3>
          <p>
            Desarrollo aplicaciones web responsivas utilizando HTML, CSS, JavaScript y React.
            Implemento interfaces modernas con Tailwind CSS, manejo estado y componentes reutilizables,
            consumo APIs REST y trabajo con control de versiones usando Git. Experiencia en despliegue
            de proyectos web y optimización básica de rendimiento y usabilidad.
          </p>
        </div>

      </div>

      <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] flex items-center justify-center">
        <div className="absolute w-28 h-28 rounded-full bg-cyan-500/20 border border-cyan-400 animate-pulse backdrop-blur flex items-center justify-center font-bold text-white text-center px-2 z-10">
          Web Developer

        </div>

        <div className="absolute inset-0 orbiting">

          {skills.map((skill, index) => {
            const angle = (360 / skills.length) * index
            const x = 140 * Math.cos((angle * Math.PI) / 180)
            const y = 140 * Math.sin((angle * Math.PI) / 180)
            return (
              <div
                key={index}
                className="absolute w-20 h-20 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-sm text-gray-300 hover:scale-110 transition duration-300"
                style={{
                  top: `calc(50% + ${y}px - 40px)`,
                  left: `calc(50% + ${x}px - 40px)`
                }}
              >
                {skill.icon}
              </div>
            )
          })}


        </div>


      </div>


    </section>
  )
}
