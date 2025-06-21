import FlipCard from "./FlipCard";
import { Github, Triangle, Brush, Code } from "lucide-react";

export default function ToolsCard() {
  const front = (
    <div className="flex gap-4 flex-wrap items-center justify-center text-white">
      <Github className="w-10 h-10" />
      <Triangle className="w-10 h-10" />
      <Brush className="w-10 h-10" />
      <Code className="w-10 h-10" />
    </div>
  );

  const back = (
    <div>
      <h2 className="text-xl font-bold mb-2">Developer Tools</h2>
      <p className="text-sm text-gray-200">
        Tools I use daily: GitHub for code, Vercel for deploys, Figma for design, VS Code for coding.
      </p>
      <a
        href="https://github.com/Yaash001"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline mt-2 inline-block"
      >
        Visit My GitHub →
      </a>
    </div>
  );

  return <FlipCard frontContent={front} backContent={back} />;
}
