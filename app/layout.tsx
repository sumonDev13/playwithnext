import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FileFlow",
  description: "A modern file manager app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} font-sans antialiased h-full`}
      >
        {/* 
          Next.js automatically slots the correct layout here.
          - If URL is /login, it renders AuthLayout.
          - If URL is / (the homepage), it renders MainAppLayout.
        */}
        {children}
      </body>
    </html>
  );
}