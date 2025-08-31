export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-2">
          Built with ❤️ using Next.js & TailwindCSS
        </p>
      </div>
    </footer>
  );
}
