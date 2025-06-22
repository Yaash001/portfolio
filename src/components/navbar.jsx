import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin ,Menu,X} from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <div className="flex items-center gap-3">
          <a className="text-xl font-bold hover:text-blue-400 transition">
            Yash
          </a>

          <a href="https://github.com/Yaash001" target="_blank" className="hover:text-blue-400 transition">
            <Github className="h-5 w-5" />
          </a>

          <a href="https://www.linkedin.com/in/yash-lahane-8a25a82a9/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

      {/*Hamburger Icons for phone*/}
      <div className="md:hidden">
        <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon" className="md:hidden">
          {isOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
        </Button>
      </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="hover:text-blue-400 duration-200">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 duration-200">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400 duration-200">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400 duration-200">Contact</Link></li>
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden px-5 pb-5 space-y-4 bg-gray-500">
<li><Link to="/" onClick={()=>setIsOpen(false)}  className="hover:text-blue-400">Home</Link></li>
<li><Link to="/about" onClick={()=>setIsOpen(false)}  className="hover:text-blue-400">About</Link></li>
<li><Link to="/projects" onClick={()=>setIsOpen(false)}  className="hover:text-blue-400">Projects</Link></li>
<li><Link to="/contact" onClick={()=>setIsOpen(false)}  className="hover:text-blue-400">Contact</Link></li>
    
        </ul>
      )}
    </nav>
  );
}
