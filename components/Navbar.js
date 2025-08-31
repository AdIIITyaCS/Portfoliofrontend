"use client";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-teal-400">About</a></li>
          <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
          <li><a href="#education" className="hover:text-teal-400">Education</a></li>
        </ul>
      </div>
    </nav>
  );
}
