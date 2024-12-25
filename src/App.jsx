import React from 'react';
import NavigationBar from './components/navigationBar';
import Typewrite from './components/Typewrite';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-home-page-image bg-cover bg-center items-center">
      <NavigationBar />
      <div className="font-mono h-2/4 w-2/4 rounded-2xl text-white p-9 flex flex-col justify-center bg-white bg-opacity-5 backdrop-blur-lg mx-auto mt-40">
        <div className="flex justify-center text-2xl"><Typewrite /></div>
        <div className="font-mono flex justify-center mt-10 text-center">
        Hello! I am Patrik, a web designer and developer. 
        I enjoy creating simple and functional websites that help people achieve their goals. 
        My experience includes working on various projects, from small portfolios to complex applications. 
        I always strive to stay up-to-date with the latest trends in the industry 
        to provide my clients with the best solutions. If you have ideas or projects you'd like to discuss, 
        feel free to contact me!
        </div>
      </div>
    </div>
  );
};

export default App;