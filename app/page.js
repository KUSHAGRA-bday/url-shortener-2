import Link from 'next/link';
import React from 'react';  

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-8 md:px-20 lg:px-32 text-white">
        <section className="flex flex-col items-center justify-center text-center w-full max-w-4xl space-y-6">
          {/* Heading */}
          <div>
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
              Welcome to the best URL Shortener in the world!!
            </h1>
            <h3 className="text-sm sm:text-base text-right mt-2">
              Made with ❤️ by{' '}
              <Link
                href="https://github.com/KUSHAGRA-bday"
                className="hover:underline font-semibold"
                target="_blank"
              >
                KUSHAGRA
              </Link>
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg px-2 sm:px-6 md:px-10">
            We understand you, that’s why we created this masterpiece — the best and most straightforward URL shortener in the world. We value your privacy, so we don’t track you or your data. We just want to make your life easier with a simple and secure tool.
          </p>

          {/* GitHub Info */}
          <p className="text-sm sm:text-base">
            For any queries, visit our GitHub page via the GitHub button in the top-right corner.
          </p>

          {/* About Info */}
          <p className="text-sm sm:text-base">
            Want to know more? Visit our About section by clicking the <b>About</b> button in the Navbar.
          </p>

          {/* CTA */}
          <p className="text-sm sm:text-base">
            <b>Ready to get started?</b> Click on <b>Shorten</b> or <b>Try now</b> to begin!
          </p>
        </section>
      </main>
    </div>
  );
}
