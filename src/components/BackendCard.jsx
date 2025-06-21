import FlipCard from "./FlipCard";
import { Api, Database, Code2, Server } from "lucide-react";

export default function BackendCard() {
  const front = (
    <div className="flex gap-4 flex-wrap items-center justify-center text-white">
      <Api className="w-10 h-10" />
      <Database className="w-10 h-10" />
      <Code2 className="w-10 h-10" />
      <Server className="w-10 h-10" />
    </div>
  );

  const back = (
    <div>
      <h2 className="text-xl font-bold mb-2">Backend Learner</h2>
      <p className="text-sm text-gray-200">
        Building scalable APIs with Spring Boot and MongoDB. Learning testing and tools like Postman.
      </p>
      <a
        href="https://github.com/Yaash001"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline mt-2 inline-block"
      >
        Explore Backend Work →
      </a>
    </div>
  );

  return <FlipCard frontContent={front} backContent={back} />;
}
