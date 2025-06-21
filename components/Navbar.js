import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-br from-pink-800 to-indigo-900 text-zinc-300 h-16 items-center px-3 py-11 flex justify-between rounded-4xl my-5 mx-4'>
      <div className='flex gap-5'>
      <Link href='/'><h1 className='text-2xl font-bold'>URL-Shortener</h1></Link>
      </div>
      <ul className='flex gap-5 justify-around  '>
        <Link href='/'><li className=' hover:font-bold'>HOME</li></Link>
        <Link href='/About'><li className=' hover:font-bold'>ABOUT</li></Link>
        <Link href='/Contact'><li className=' hover:font-bold'>CONTACT</li></Link>
        <Link href='/Shorten'><li className=' hover:font-bold'>SHORTEN</li></Link>
        <li className='flex gap-5 py-0'>
          {/* Try now button */}
          <Link href='/Shorten'><button className='bg-gradient-to-br from-pink-800  to-indigo-900 shadow-blue-800 p-2 py-0.5 rounded-2xl hover:from-indigo-900 hover:to-pink-800 transition duration-300 ease-in-out cursor-pointer'>Try now</button></Link>
          {/* Github button */}
          <a href='https://github.com/KUSHAGRA-bday'><button className='bg-gradient-to-br from-pink-800 to-indigo-900 shadow-blue-800 p-2 py-0.5 rounded-2xl hover:from-indigo-900 hover:to-pink-800 transition duration-300 ease-in-out cursor-pointer'>Github</button></a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
