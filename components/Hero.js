export default function Hero({ name, bio }) {
  return (
    <section className="text-center py-20">
    <h1 className="text-5xl font-extrabold mb-4">Hello, I&apos;m {name}</h1>


      <p className="text-xl text-gray-400 max-w-2xl mx-auto">{bio}</p>
    </section>
  );
}