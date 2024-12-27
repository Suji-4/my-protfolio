import React from 'react';
import { Link } from 'react-router-dom';  

function Navbar() {
  return (
    <nav className="flex justify-between bg-gradient-to-b from-violet-400 to-pink-500 p-5 sticky top-0 cursor-pointer shadow-lg shadow-pink-200 z-10">
      <h1 className="text-4xl text-white font-bold font-sans"><Link to="/">Portfolio</Link></h1>
      <ul className="flex gap-12 text-xl font-medium text-cyan-100">
        <li className="hover:text-pink-300">
          <Link to="/">Home</Link> {/* Link to Home */}
        </li>
        <li className="hover:text-pink-300">
          <Link to="/about">About</Link> {/* Link to About */}
        </li>
        <li className="hover:text-pink-300">
          <Link to="/projects">Projects</Link> {/* Link to Projects */}
        </li>
        <li className="hover:text-pink-300">
          <Link to="/contact">Contact</Link> {/* Link to Contact */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
