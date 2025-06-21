import React from "react";
import htmlLogo from "../../assets/icons/html.png";
import cssLogo from "../../assets/icons/css.png";
import jsLogo from "../../assets/icons/javascript.png";
import reactLogo from "../../assets/icons/react.png";

export const frontendFront = (
  <div className="flex gap-4 flex-wrap items-center justify-center">
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
    >
      <img src={htmlLogo} alt="HTML" className="w-12 h-12" />
    </a>
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/CSS"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
    >
      <img src={cssLogo} alt="CSS" className="w-12 h-12" />
    </a>
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
    >
      <img src={jsLogo} alt="JavaScript" className="w-12 h-12" />
    </a>
    <a
      href="https://reactjs.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
    >
      <img src={reactLogo} alt="React" className="w-12 h-12" />
    </a>
  </div>
);

export const frontendBack = (
  <div className="text-center text-white">
    <h2 className="text-xl font-bold mb-2">Frontend Developer</h2>
    <p className="text-sm text-gray-200">
      Building responsive UIs with HTML, CSS, JavaScript, and React.
    </p>
    <a
      href="https://github.com/Yaash001"
      className="text-blue-400 underline mt-2 inline-block hover:text-blue-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Projects →
    </a>
  </div>
);
