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
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white px-6 py-24">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-cyan-400 text-center">
        Habilidades Técnicas
      </h2>

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
