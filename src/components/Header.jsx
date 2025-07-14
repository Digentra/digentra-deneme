import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                className="h-12 w-auto"
                src="https://raw.githubusercontent.com/Taha-Batuhan-Yilmaz/E-Learning-Site-UI/main/src/assets/logo.png"
                alt="Skilline"
              />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                Home
              </a>
              <a
                href="/courses"
                className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                Courses
              </a>
              <a
                href="/about"
                className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                About Us
              </a>
              <a
                href="/blog"
                className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                Blog
              </a>
              <a
                href="/careers"
                className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                Careers
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a
                href="/login"
                className="text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-full text-lg font-medium"
              >
                Login
              </a>
              <a
                href="/signup"
                className="ml-4 bg-orange-500 text-white hover:bg-orange-600 px-6 py-2 rounded-full text-lg font-medium"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="text-gray-800 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="/courses"
            className="text-gray-800 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Courses
          </a>
          <a
            href="/about"
            className="text-gray-800 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </a>
          <a
            href="/blog"
            className="text-gray-800 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Blog
          </a>
          <a
            href="/careers"
            className="text-gray-800 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Careers
          </a>
          <a
            href="/login"
            className="text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-orange-500 text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
