import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import FlipCard from "../components/FlipCard";
import { frontendBack, frontendFront } from "../components/data/frontendContent";
import { backendBack, backendFront } from "../components/data/backendContent";
import { toolsFront,toolsBack } from './../components/data/toolsContent';
import { Code2 } from "lucide-react";
import YashLogo from "../assets/icons/YashLogo.png";
 



export default function Hero() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-500 flex flex-col items-center justify-center max-h-full text-white text-center px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 1 }}
    >

  <div className="flex items-center justify-center mb-4">
  <img
    src={YashLogo} 
    alt="Yash Logo"
  className="w-20 h-20 rounded-full border-2 border-white transition-shadow shadow-[0_0_24px_6px_rgba(255,255,255,0.2)] hover:shadow-[0_0_24px_6px_rgba(255,255,255,0.9)] mb-4"
  />
</div>

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
<FlipCard

  frontContent={frontendFront}
  backContent={frontendBack}
 
/>


  <FlipCard
    frontContent={backendFront}
    backContent={backendBack}
  />

  <FlipCard
    frontContent={toolsFront}
    backContent={toolsBack}
  /> 

 
</div>

        
    </motion.div>
  );
}
