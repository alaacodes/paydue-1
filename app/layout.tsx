import type { Metadata } from "next";
import type { Viewport } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PayDue",
  description: "Pay for you dues with ease",
  metadataBase: new URL("https://payduenow.com"),
  referrer: "origin-when-cross-origin",
  keywords: [
    "Union",
    "Student",
    "University",
    "School",
    "Semester",
    "Dues",
    "Naira",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative">
        <Navbar />
        <div id="portal" />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}
