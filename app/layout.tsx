import type { Metadata, Viewport } from "next";
import { Bungee, Inter, Press_Start_2P, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
});

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
});

export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Single-page portfolio for a software engineer and MBA student.",
};

export const viewport: Viewport = {
  themeColor: "#ff9d00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${pressStart.variable} ${bungee.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
