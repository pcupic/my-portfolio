import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="fixed w-5/6 rounded-2xl bg-white bg-opacity-30 backdrop-blur-lg mt-12 ">
      <div className="mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-mono text-white w-1/2">patrik cupic.</div>
        <ul className="flex space-x-6 w-1/2 justify-end font-mono">
          <li><a href="#home" className="text-white hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="text-white hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="text-white hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="text-white hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;