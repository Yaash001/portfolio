
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.scss";

export const metadata = {
  title: "Yash Lahane | Developer & Creative Technologist",
  description:
    "Explore Yash Lahane's portfolio featuring creative web development, interactive experiences, software projects, technical skills, and achievements. Discover my work and let's connect.",
  openGraph: {
    title: "Yash Lahane | Developer & Creative Technologist",
    description:
      "Discover my projects, creative web experiences, technical skills, and achievements. Explore my portfolio and get in touch to collaborate.",
    siteName: "Yash Lahane",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Yash Lahane — Developer & Creative Technologist. Explore my portfolio.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Lahane | Developer & Creative Technologist",
    description:
      "Explore creative web development, interactive experiences, projects, and technical achievements. Discover my portfolio and let's connect.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_ID!}
        />
      </body>
    </html>
  );
}
