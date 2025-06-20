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

      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Pgfooter/>
      </main>
      



      <Toaster position="top-center" richColors />
    </>
  );
}
