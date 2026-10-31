import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.scss";

export const metadata = {
  title: "Yash Lahane | Developer & Creative Technologist",
  description:
    "Portfolio of Yash Lahane — a computer engineering student exploring web development, creative interfaces, and IoT.",
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