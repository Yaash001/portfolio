
import React from "react";
import githubLogo from "../../assets/icons/github.png";
import vercelLogo from "../../assets/icons/vercel.png";
import vscodeLogo from "../../assets/icons/visual-studio-code.png";

export const toolsFront = (
  <div className="flex gap-4 flex-wrap items-center justify-center">
    <img src={githubLogo} alt="GitHub" className="w-12 h-12" />
    <img src={vercelLogo} alt="Vercel" className="w-12 h-12" />
    <img src={vscodeLogo} alt="VS Code" className="w-12 h-12" />
  </div>
);

export const toolsBack = (
  <div className="text-center text-white">
    <h2 className="text-xl font-bold mb-2">Tools I Use</h2>
    <p className="text-sm text-gray-200">
      From coding in VS Code to deploying on Vercel — I use modern tools daily.
    </p>
    <a
      href="https://github.com/Yaash001"
      className="text-blue-400 underline mt-2 inline-block hover:text-blue-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      View GitHub →
    </a>
  </div>
);
