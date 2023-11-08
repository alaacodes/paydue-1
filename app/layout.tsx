import type { Metadata } from "next";
import type { Viewport } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

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
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
