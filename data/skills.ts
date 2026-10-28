
export type SkillGroup = {
  languages: string[];
  frameworks: string[];
  runtime: string[];
  styling: string[];
  tools: string[];
};

const skills: SkillGroup = {
  languages: ["HTML", "CSS", "JavaScript", "C", "C++", "Python"],
  frameworks: ["React", "Angular", "Express.js"],
  runtime: ["Node.js"],
  styling: ["SCSS", "Tailwind CSS"],
  tools: ["Git", "GitHub", "VS Code", "GitHub Copilot"],
};

export default skills;
