import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-br from-pink-800 to-indigo-900 text-zinc-300 rounded-4xl my-3 mx-0 sm:mx-4 shadow-md">
      <div className="flex justify-between items-center h-16 px-3 sm:px-6">
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-bold hover:scale-110 transform duration-300 cursor-pointer">
            URL-Shortener
          </h1>
        </Link>
        {/* Hamburger for mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-5 items-center">
          <Link href="/"><li className="hover:scale-110 transform duration-300 cursor-pointer">HOME</li></Link>
          <Link href="/About"><li className="hover:scale-110 transform duration-300 cursor-pointer">ABOUT</li></Link>
          <Link href="/Contact"><li className="hover:scale-110 transform duration-300 cursor-pointer">CONTACT</li></Link>
          <Link href="/Shorten"><li className="hover:scale-110 transform duration-300 cursor-pointer">SHORTEN</li></Link>
          <li className="flex gap-3 py-0">
            <Link href="/Shorten">
              <button className="bg-gradient-to-br from-pink-800 to-indigo-900 shadow-blue-800 p-2 py-0.5 rounded-2xl hover:from-indigo-900 hover:to-pink-800 hover:scale-110 transform duration-300 cursor-pointer">
                Try now
              </button>
            </Link>
            <a href="https://github.com/KUSHAGRA-bday" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-br from-pink-800 to-indigo-900 shadow-blue-800 p-2 py-0.5 rounded-2xl hover:from-indigo-900 hover:to-pink-800 hover:scale-110 transform duration-300 cursor-pointer">
                Github
              </button>
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col gap-3 px-4 pb-4 sm:hidden bg-gradient-to-br from-pink-800 to-indigo-900 rounded-b-2xl">
          <Link href="/"><li className="hover:scale-105 transform duration-200 cursor-pointer" onClick={() => setOpen(false)}>HOME</li></Link>
          <Link href="/About"><li className="hover:scale-105 transform duration-200 cursor-pointer" onClick={() => setOpen(false)}>ABOUT</li></Link>
          <Link href="/Contact"><li className="hover:scale-105 transform duration-200 cursor-pointer" onClick={() => setOpen(false)}>CONTACT</li></Link>
          <Link href="/Shorten"><li className="hover:scale-105 transform duration-200 cursor-pointer" onClick={() => setOpen(false)}>SHORTEN</li></Link>
          <li className="flex flex-col gap-2 py-1">
            <Link href="/Shorten">
              <button className="bg-gradient-to-br from-pink-800 to-indigo-900 shadow-blue-800 p-2 rounded-2xl hover:from-indigo-900 hover:to-pink-800 hover:scale-105 transform duration-200 cursor-pointer w-full" onClick={() => setOpen(false)}>
                Try now
              </button>
            </Link>
            <a href="https://github.com/KUSHAGRA-bday" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-br from-pink-800 to-indigo-900 shadow-blue-800 p-2 rounded-2xl hover:from-indigo-900 hover:to-pink-800 hover:scale-105 transform duration-200 cursor-pointer w-full" onClick={() => setOpen(false)}>
                Github
              </button>
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar;