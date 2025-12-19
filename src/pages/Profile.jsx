export default function Profile() {
  return (
    <section className="px-6 md:px-20 py-24 bg-[#0f172a] text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-cyan-400">
        Perfil Profesional
      </h2>

      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-gray-300 text-lg leading-relaxed">
          Web Developer con formación en desarrollo web y programación, enfocada en la creación de
          sitios web funcionales, responsivos y orientados a usabilidad. Experiencia desarrollando
          proyectos completos con React, consumo de APIs y despliegue en producción. Interesada en
          seguir creciendo en equipos donde el desarrollo web tenga impacto real en el negocio.
        </p>

        <ul className="space-y-3 text-gray-300">
          <li>• Desarrollo de interfaces web claras y mantenibles</li>
          <li>• Implementación de soluciones orientadas a usuario y negocio</li>
          <li>• Trabajo con control de versiones y flujos de desarrollo modernos</li>
        </ul>
      </div>
    </section>
  )
}
