export default function Certificates({ certificates }) {
  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Licenses & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {(certificates || []).map((cert, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
              <p className="font-bold text-lg">{cert.name}</p>
              <p className="text-sm text-gray-400 mt-1">Issued {cert.year}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:underline mt-2 block"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
