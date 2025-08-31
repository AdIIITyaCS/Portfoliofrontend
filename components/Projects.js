export default function Projects({ projects }) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-gray-700 text-sm py-1 px-3 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-teal-400 font-semibold hover:underline">
              View Project &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}