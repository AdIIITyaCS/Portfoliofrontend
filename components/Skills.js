export default function Skills({ skills }) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="bg-gray-800 text-teal-400 font-semibold py-2 px-4 rounded-lg">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}