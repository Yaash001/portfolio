import FlipCard from "./FlipCard";
import {
  Html,
  Css,
  Javascript,
  React as ReactIcon,
} from "lucide-react"; // or use your own SVGs

export default function FrontendCard() {
  const front = (
    <div className="flex gap-4 flex-wrap items-center justify-center text-white text-opacity-90">
      <Html className="w-10 h-10" />
      <Css className="w-10 h-10" />
      <Javascript className="w-10 h-10" />
      <ReactIcon className="w-10 h-10" />
    </div>
  );

  const back = (
    <div>
      <h2 className="text-xl font-bold mb-2">Frontend Developer</h2>
      <p className="text-sm text-gray-200">
        Building responsive UIs with React, Tailwind, and clean design patterns.
      </p>
      <a
        href="https://github.com/Yaash001"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline mt-2 inline-block"
      >
        View Projects →
      </a>
    </div>
  );

  return <FlipCard frontContent={front} backContent={back} />;
}
