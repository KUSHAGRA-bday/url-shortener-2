import React from 'react'

const Contact = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center py-20 px-4 sm:px-10 min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold underline">Contact Us</h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          You can reach out to us via any social media platform, or simply email us at:
          <br />
          <span className="text-pink-400 font-semibold">falana@gmail.com</span>
        </p>
      </div>
    </div>
  )
}

export default Contact
