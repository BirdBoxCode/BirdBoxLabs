import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BirdBox Labs",
  description: "BirdBox Code and Design",
  icons: {
    icon: "https://res.cloudinary.com/depkh8amy/image/upload/v1680126141/BirdBox%20Code/BirdBox_dgn3ja.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.2/css/all.css" />
      </head>
      <body
        className={`${jura.variable} antialiased bg-[#0D0E11] text-[#FFFBF8] overflow-x-hidden`}
      >
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
