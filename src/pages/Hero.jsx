import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import CustomCard from '../components/FlipCard';

export default function Hero() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-500 flex flex-col items-center justify-center text-white text-center px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Hey, I'm Yash</h1>
        <TypeAnimation 
        sequence={
          [
            "FrontEnd Developer",3000,
            "Backend Learner",2000,
            "A Creative Coder",3000,
          ]
        }

        wrapper="span" speed={10} repeat={Infinity} className="block text-2xl text-white mt-2"
        />

        <div className="mt-6">
          <Link to="/contact">
            <Button variant="secondary">Let's Connect</Button>
          </Link>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
  <CustomCard
    title="Frontend Developer"
    description="React, Vite, Tailwind — UI magic at your service ✨"
  />
  <CustomCard
    title="Backend Learner"
    description="Spring Boot + MongoDB — building scalable apps 🚀"
  />
  <CustomCard
    title="Creative Coder"
    description="Turning ideas into elegant, functional code 💡"
  />
</div>

        
    </motion.div>
  );
}
