export type Certificate = {
  title: string;
  issuer: string;
  image: string;
  link?: string;
  description?: string ;
};

const certificates: Certificate[] = [
    {
        title : "Introduction to Generative AI Studio",
        issuer : "Simpli Learn",
        image : "/certificates/certificate1.png",
        link :"https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzODE0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTYyODcxNV85ODkzNTE4XzE3NjY0OTkwOTI4NjYucG5nIiwidXNlcm5hbWUiOiJZYXNoIExhaGFuZSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6757%2FIntroduction-to-Generative-AI-Studio%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1601137806364509373&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVd%2FHwqaisTPLPjkqyrytKTUstKsrMS49PKsovL04tsvXJzMtOTfHMAwDaHADTQQAAAA%3D%3D",
        description : "Explored how AI tools create content, and gained hands-on experience with GenAI Studio. Understood prompt engineering, AI-powered applications, and how to use Generative AI to solve real-world problems."


    },
    {
        title : "PromptWars Virtual Challenge",
        issuer : "Google for Developers | Hack2Skills",
        image : "/certificates/certificate2.png",
    },
    
  // Add certificates here
  // {
  //   title: "Certificate Name",
  //   issuer: "Issuing Organization",
  //   image: "/certificates/certificate-name.png",
  //   link: "https://example.com/certificate",
  // },
];

export default certificates;