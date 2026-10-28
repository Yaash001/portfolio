
export type Education = {
  qualification: string;
  institution: string;
  duration: string;
  description: string;
};

const education: Education[] = [
  {
    qualification: "Diploma in Information Technology",
    institution: "PCET's Pimpri Chinchwad Polytechnic",
    duration: "3 Years",
    description:
      "Built a foundation in information technology through practicals, assignments, and projects.",
  },
  {
    qualification: "B.Tech in Computer Engineering",
    institution:
      "PCET's Pimpri Chinchwad College of Engineering and Research",
    duration: "3 Years",
    description: "Currently studying Computer Engineering.",
  },
];

export default education;
