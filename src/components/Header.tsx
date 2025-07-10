
import React from 'react';

const Header = () => {
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm text-white py-4 px-6 fixed top-0 left-0 right-0 z-50 border-b border-slate-700/50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Mountain3D
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
          <a href="#gallery" className="hover:text-blue-400 transition-colors duration-300">Gallery</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
        </nav>
        <div className="md:hidden">
          <button className="text-white hover:text-blue-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
