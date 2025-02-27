import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Abu Rayhan Biruni International Chemistry Olympiad | Global Science Competition",
  description:
    "Compete in the Abu Rayhan Biruni International Chemistry Olympiad, a prestigious global competition for young chemists. Test your skills, gain recognition, and connect with future scientists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
