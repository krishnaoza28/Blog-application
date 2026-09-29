import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300 border-t border-gray-800 pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Logo and About */}
        <div>
          <Logo width="120px" />
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            A blog platform to share stories and ideas. Feel free to post whatever’s on your mind.
          </p>
        </div>

        {/* Navigation */}
        <div className='ml-32'>
          <h3 className="text-sm font-semibold uppercase text-gray-400 mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white">
                Home
              </Link>
            </li>
            <li>
              <Link  className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white">
                About
              </Link>
            </li>
            <li>
              <Link  className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-400 mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a
              className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              
              className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
