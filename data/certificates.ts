export type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  image: string;
  url: string;
};

const certificates: Certificate[] = [
  // Add certificates here:
  // {
  //   title: "Certificate name",
  //   issuer: "Issuing organization",
  //   date: "Month Year",
  //   image: "/certificates/certificate-name.png",
  //   url: "https://example.com/verify",
  // },
];

export default certificates;
