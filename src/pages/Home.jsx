import { Link } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'


export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 py-20 md:px-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
      <div className="z-10 w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hola, soy <span className="text-cyan-400">JP</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto md:mx-0">
          Desarrolladora frontend enfocada en diseño limpio, interfaces modernas y experiencias interactivas.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link to="/projects" className="bg-cyan-500 px-6 py-3 rounded-xl text-white font-semibold hover:bg-cyan-600 transition duration-300">
            Ver proyectos
          </Link>
          <Link to="/contact" className="border border-white px-6 py-3 rounded-xl text-white font-semibold hover:bg-white hover:text-black transition duration-300">
            Contáctame
          </Link>
        </div>
      </div>

     
      <div className="z-10 flex justify-center md:w-1/2 mb-12 md:mb-0">
        <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
          <div className="w-72 h-72 md:w-96 md:h-96 bg-white/10 border border-white/20 backdrop-blur-lg rounded-full shadow-2xl flex items-center justify-center">
            <img
              src="/assets/imagen-portafolio.png"
              alt="JP anime"
              className="w-48 md:w-60 rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Tilt>
      </div>
    </section>
  )
}
