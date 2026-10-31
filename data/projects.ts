export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "Solar Track",
    category: "IoT . Frontend Development",
    description:"A frontend interface for an IoT-based sun-tracking system, connecting a web experience with a project focused on tracking the sun's movement.",
    technologies: ["React", "TailwindCSS", "Spring Boot", "IoT"],
    image: "/preview/logo.png",
    githubUrl: "https://github.com/Yaash001/solar-track-frontend",
  },
];

export default projects;