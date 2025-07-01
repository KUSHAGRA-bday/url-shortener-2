import Link from 'next/link';
import React from 'react';  

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between px-2 sm:px-6 md:px-20 text-white">
        <section className="flex flex-col items-center justify-center text-center w-full max-w-3xl mx-auto">
          <div>
            <h1 className="font-bold text-2xl sm:text-3xl">Welcome to the best URL Shortener in the world!!</h1>
            <h3 className="text-right text-base sm:text-lg">
              Made with ❤️ by{' '}
              <Link href="https://github.com/KUSHAGRA-bday">
                <b>KUSHAGRA</b>
              </Link>
            </h3>
          </div>
          <h4 className="py-3 px-2 sm:px-6 md:px-20 lg:px-40 text-sm sm:text-base">
            We understand you that&rsquo;s why we create this masterpiece &ldquo;The best and most straight forward URL Shortener in the world!!&rdquo;. We value you and your privacy, so we don&rsquo;t track you or your data. We just want to make your life easier by providing a simple and easy to use URL shortener.
          </h4>
          <br />
          <p className="text-sm sm:text-base">
            For any kind of query you can check our GitHub page by clicking on Github button on the top right corner.
          </p>
          <br />
          <p className="text-sm sm:text-base">
            For more information you can check our About section by clicking on the About button on the Navbar.
          </p>
          <br />
          <p className="text-sm sm:text-base">
            <b>Ready to get started?</b> Click on <b>Shorten</b> or <b>Try now</b> to start!!!
          </p>
        </section>
      </main>
    </div>
  );
}