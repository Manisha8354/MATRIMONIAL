
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import img from '../assets/ammi2.png'


const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        '.mobile-menu',
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.3 }
      );
    } else {
      gsap.to('.mobile-menu', { opacity: 0, x: 100, duration: 0.3 });
    }
  }, [isMenuOpen]);

  return (
<header className="fixed top-0 left-0 w-full bg-pink-100 hover:bg-pink-100 transition-colors duration-300 z-50 shadow-md">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
    <Link to="/" className="flex items-center space-x-2">
      <img src={img} alt="Logo" className="absolute w-60" />
      
    </Link>

    {/* Desktop Navigation */}
    <div className="hidden lg:flex space-x-8 ml-[250px]">
  <Link
    to="/"
    className="text-pink-800 text-base md:text-xl lg:text-xl font-semibold hover:text-pink-800 hover:font-bold transition duration-300"
  >
    Home
  </Link>
  <Link
    to="/about"
    className="text-pink-800 text-base md:text-xl lg:text-xl font-semibold hover:text-pink-800 hover:font-bold transition duration-300"
  >
    About
  </Link>
  <Link
    to="/gallery"
    className="text-pink-800 text-base md:text-xl lg:text-xl font-semibold hover:text-pink-800 hover:font-bold transition duration-300"
  >
    Gallery
  </Link>
  <Link
    to="/contactus"
    className="text-pink-800 text-base md:text-xl lg:text-xl font-semibold hover:text-pink-800 hover:font-bold transition duration-300"
  >
    Contact Us
  </Link>
  <Link
    to="/createprofile"
    className="text-pink-800 text-base md:text-xl lg:text-xl font-semibold hover:text-pink-800 hover:font-bold transition duration-300"
  >
    Create Profile
  </Link>
</div>


    {/* Desktop Buttons */}
    <div className="hidden lg:flex space-x-4">
      <Link to="/login">
        <button className="bg-gradient-to-r from-pink-600 to-pink-700 text-white py-3 px-6 rounded-md border-2 border-transparent hover:border-white hover:scale-105 transition-transform duration-300 text-lg">
          Log In
        </button>
      </Link>
      <Link to="/sign">
        <button className="bg-gradient-to-r from-pink-600 to-pink-700 text-white py-3 px-6 rounded-md border-2 border-transparent hover:border-white hover:scale-105 transition-transform duration-300 text-lg">
          Sign Up
        </button>
      </Link>
    </div>

    {/* Mobile Menu Button */}
    <div className="lg:hidden">
      <button onClick={toggleMenu} className="text-pink-800">
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>
  </div>

  {/* Mobile Navigation Menu */}
  {isMenuOpen && (
    <div className="fixed top-0 right-0 bottom-0 w-3/4 bg-pink-100 shadow-lg z-50 lg:hidden">
      <div className="flex items-center justify-between p-4">
       
        <button onClick={toggleMenu} className="text-pink-800">
          <FaTimes size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-2">
        <Link
          to="/"
          onClick={toggleMenu}
          className="text-pink-800 text-xl font-semibold hover:text-pink-800 hover:font-bold transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={toggleMenu}
          className="text-pink-800 text-xl font-semibold hover:text-pink-800 hover:font-bold transition duration-300"
        >
          About
        </Link>
        <Link
          to="/gallery"
          onClick={toggleMenu}
          className="text-pink-800 text-xl font-semibold hover:text-pink-800 hover:font-bold transition duration-300"
        >
          Gallery
        </Link>
        <Link
          to="/contactus"
          onClick={toggleMenu}
          className="text-pink-800 text-xl font-semibold hover:text-pink-800 hover:font-bold transition duration-300"
        >
          Contact Us
        </Link>
        <Link
          to="/createprofile"
          onClick={toggleMenu}
          className="text-pink-800 text-xl font-semibold hover:text-pink-800 hover:font-bold transition duration-300"
        >
          Create Profile
        </Link>
        <div className="flex flex-col space-y-4 mt-4">
          <Link to="/login">
            <button className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition duration-300">
              Log In
            </button>
          </Link>
          <Link to="/sign">
            <button className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </div>
  )}
</header>


  )
}

