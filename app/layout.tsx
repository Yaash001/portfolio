
import type { ReactNode } from "react";
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
      <body>{children}</body>
    </html>
  );
}
