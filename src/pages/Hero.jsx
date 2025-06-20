import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="h-screen  bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-500 flex items-center justify-center text-white text-center px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 5, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 1 }}
    >
      <div>
        <h1 className="text-5xl font-bold mb-4">Hey, I'm Yash</h1>
        <p className="text-xl text-gray-200 max-w-xl">
          I build modern, responsive websites using React and Tailwind CSS.
        </p>
      </div>
    </motion.div>
  );
}
