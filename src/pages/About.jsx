export default function About() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-24 bg-[#0f172a] text-white flex flex-col lg:flex-row items-center gap-16">
      
      <div className="w-72 h-72 md:w-80 md:h-80 bg-white/10 border border-white/20 backdrop-blur-lg rounded-3xl shadow-xl flex items-center justify-center">
        <img
          src="/assets/imagen-portafolio.png"
          alt="Avatar"
          className="w-48 md:w-56 rounded-full border-4 border-white shadow-md"
        />
      </div>

      <div className="max-w-2xl space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400">Sobre mí</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Soy una desarrolladora frontend enfocada en construir interfaces modernas, limpias y funcionales. Me encanta transformar ideas en experiencias digitales con React, Tailwind y diseño responsivo.  
        </p>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-400 space-y-1">
          <li>Pixel perfect: Figma → Código</li>
          <li>Diseño responsivo & mobile-first</li>
          <li>Componentes reutilizables y claros</li>
          <li>Trabajo en equipo y metodologías ágiles</li>
        </ul>
        <a
          href="/assets/CV-JP.pdf"
          download
          className="inline-block mt-4 px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
        >
          Descargar CV
        </a>
      </div>
    </section>
  )
}
