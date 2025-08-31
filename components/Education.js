export default function Education({ education }) {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {(education || []).map((edu, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <p className="font-bold text-lg">{edu.institution}</p>
              <p className="text-gray-400">{edu.degree}</p>
              <p className="text-gray-400">{edu.cgpaOrPercentage}</p>
              <p className="text-sm text-gray-500 mt-1">{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
