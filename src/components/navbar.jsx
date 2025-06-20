import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <div className="flex items-center gap-3">
          <a
            className="text-xl font-bold hover:text-blue-400 transition"
          >
            Yash
          </a>

          <a
            href="https://github.com/Yaash001"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <Github className="h-10 w-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/yash-lahane-8a25a82a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin className="h-10 w-6" />
          </a>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-blue-400 duration-200">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 duration-200">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400 duration-200">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400 duration-200">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
