const techs = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "Node.js", icon: "/icons/node.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "Vite", icon: "/icons/vite.svg" },
]

export default function TechGrid() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Tecnologías que uso
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
        {techs.map((tech, idx) => (
          <div key={idx} className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
            <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
            <p className="mt-2 text-sm text-gray-800 dark:text-gray-300">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
