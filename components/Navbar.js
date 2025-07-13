import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-br from-pink-800 to-indigo-900 text-zinc-300 rounded-4xl mx-4 my-5 px-4 py-4 md:py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold hover:scale-110 transform duration-300 text-shadow-fuchsia-700"><Image src="/URL Shortener logo.png" alt="Logo" width={40} height={40} /> Public URL-Shortener</h1>
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm md:text-base font-medium">
          <Link href="/"><li className="hover:scale-110 transform duration-300">HOME</li></Link>
          <Link href="/About"><li className="hover:scale-110 transform duration-300">ABOUT</li></Link>
          <Link href="/Contact"><li className="hover:scale-110 transform duration-300">CONTACT</li></Link>
          <Link href="/Shorten"><li className="hover:scale-110 transform duration-300">SHORTEN</li></Link>

          {/* Action Buttons */}
          <li className="flex gap-3 mt-2 md:mt-0">
            <Link href="/Shorten">
              <button className="bg-gradient-to-br from-pink-800 to-indigo-900 shadow-blue-800 px-4 py-1 rounded-2xl hover:from-indigo-900 hover:to-pink-800 hover:scale-110 transform duration-300 cursor-pointer">
                Try now
              </button>
            </Link>
            <a href="https://github.com/KUSHAGRA-bday" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-br from-pink-800 to-indigo-900 shadow-blue-800 px-4 py-1 rounded-2xl hover:from-indigo-900 hover:to-pink-800 hover:scale-110 transform duration-300 cursor-pointer">
                GitHub
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

