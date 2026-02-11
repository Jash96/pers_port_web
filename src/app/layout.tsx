import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jashan",
  description: "Portfolio of Jashan - Blockchain specialist, AI automation architect, and technical writer crafting the future of Web3 and intelligent systems.",
  keywords: ["crypto", "blockchain", "AI automation", "N8N", "Web3", "technical writer"],
  icons: {
    icon: [
      { url: "/icons8-globe-64.png", type: "image/png", sizes: "64x64" },
    ],
  },
};

import { Molle, Roboto } from "next/font/google";

const molle = Molle({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-molle",
  style: "italic",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased ${molle.variable} ${roboto.variable}`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
