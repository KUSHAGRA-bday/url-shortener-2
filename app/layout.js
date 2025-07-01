import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full bg-gradient-to-br from-black to-indigo-500`}
      >
        <Navbar />
        {children}
        <footer className="bg-gray-900 text-white w-full py-6 mt-10">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 flex-wrap">
            {/* Left: Copyright */}
            <p className="text-xs sm:text-sm">
              © {new Date().getFullYear()} <strong>Kodrammer</strong>. All rights reserved.
            </p>

            {/* Right: Links */}
            <div className="flex gap-3 sm:gap-5 flex-wrap justify-center">
              <Link
                href="https://github.com/KUSHAGRA-bday"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm hover:underline"
              >
                GitHub
              </Link>
              <Link href="/privacy" className="text-xs sm:text-sm hover:underline">
                Privacy
              </Link>
              <Link href="/terms" className="text-xs sm:text-sm hover:underline">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
