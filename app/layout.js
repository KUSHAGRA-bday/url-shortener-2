import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "URL-shortener",
  description: "Trusted URL shortener",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-black  to-indigo-500`} >
        <Navbar/>
        {children}
        <footer className="bg-gray-900 text-white w-full h-32">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} Kodrammer . All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a
                href="https://github.com/KUSHAGRA-bday"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                GitHub
              </a>
              <a href="/privacy" className="text-sm hover:underline">
                Privacy
              </a>
              <a href="/terms" className="text-sm hover:underline">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
