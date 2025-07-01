import React from 'react'

const About = () => {
  return (
    <div>
      <main className="text-white flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <h1 className="text-4xl font-bold underline text-center">About Us</h1>

        <div className="max-w-3xl mt-6 space-y-6 text-lg text-center sm:text-left">
          <p>
            We are a team of passionate developers dedicated to creating the best URL shortener service. Our mission is to provide a simple, efficient, and user-friendly platform for all your URL shortening needs. Here, you can see others' URLs as this is a cloud platform. This platform is for everyone who wants to share their links easily and efficiently. You can share your links with just a few clicks, and we'll take care of the rest. Also, if you want to promote your website, you can do so without any hesitation.
          </p>

          <p>
            In a world full of noise and endless URLs, we bring clarity and simplicity. Our mission? Make every link memorable, trackable, and beautiful. From students to startups, anyone can use our short links to build smarter digital journeys. Built for developers, creators, and power users, this URL shortener is powered by <span className="italic">Node.js + MongoDB</span>. Every short link is encrypted, logged, and optionally tracked with analytics. APIs available. Privacy respected.
          </p>
        </div>
      </main>
    </div>
  )
}

export default About
