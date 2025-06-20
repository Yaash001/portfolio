import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent!");
    }, 3000);
  };

  return (
    <motion.div
      className="h-screen bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-500 text-white  "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 1 }}
    >
      <section className="  p-7 ">
        <h2 className="text-4xl font-bold mb-6 text-center p-4">Contact Me</h2>

        <form className="flex flex-col gap-6 " onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Your Name"
            className="text-white p-5"
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="text-white p-5"
            required
          />
          <Textarea
            placeholder="Your Message"
            rows={4}
            className="text-white p-3"
            required
          />
          <Button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="animate-spin h-5 w-5" />}
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </section>
    </motion.div>
  );
}
