import React from 'react'

const About = () => {
  return (
    <div>
      {/* Desktop UI */}
      <main className="hidden sm:flex flex-col items-center text-white py-8 sm:py-16 min-h-screen">
        <h1 className="text-2xl sm:text-4xl font-bold underline mb-4 text-center">About Us</h1>
        <p className="text-base sm:text-lg px-3 sm:px-8 md:px-24 py-3 sm:py-5 text-center">
          We are a team of passionate developers dedicated to creating the best URL shortener service. Our mission is to provide a simple, efficient, and user-friendly platform for all your URL shortening needs. Here u can see others URLs also as this is a cloud platform. This platform is for everyone who wants to share their links easily and efficiently. You can share your links with just a few clicks, and we'll take care of the rest and also if U want to promote your website so u can without any hesitation.
        </p>
        <p className="text-base sm:text-lg px-3 sm:px-8 md:px-24 text-center">
          In a world full of noise and endless URLs, we bring clarity and simplicity. Our mission? Make every link memorable, trackable, and beautiful. From students to startups, anyone can use our short links to build smarter digital journeys. Built for developers, creators, and power users, this URL shortener is powered by Node.js + MongoDB. Every short link is encrypted, logged, and optionally tracked with analytics. APIs available. Privacy respected.
        </p>
      </main>
      {/* Mobile UI */}
      <main className="flex sm:hidden flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 to-pink-800 text-white px-4 py-10">
        <div className="w-full max-w-xs bg-white/10 rounded-2xl shadow-lg p-5 flex flex-col items-center">
          <h1 className="text-xl font-bold mb-2 text-pink-200">About</h1>
          <p className="text-sm text-center mb-3">
            Welcome to <span className="font-bold text-pink-300">URL Shortener</span>!
          </p>
          <ul className="text-xs text-left list-disc list-inside mb-3 text-blue-100">
            <li>Fast & easy link shortening</li>
            <li>No tracking, privacy first</li>
            <li>Share your links anywhere</li>
            <li>Made for everyone</li>
          </ul>
          <div className="text-xs text-center text-zinc-200">
            <span className="block mb-1">Built with ❤️ by KUSHAGRA</span>
            <span className="block">Node.js + MongoDB</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About;