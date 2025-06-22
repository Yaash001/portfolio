import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Toaster } from "sonner";
import Pgfooter from './components/Pgfooter';

export default function App() {
  return (
    <>
      <Navbar />
<div className="flex flex-col min-h-screen pt-16">
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Pgfooter/>
      </div>

      



      <Toaster position="top-center" richColors />
    </>
  );
}
