import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="fixed w-5/6 rounded-2xl bg-white bg-opacity-30 backdrop-blur-lg mt-12 ">
      <div className="mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-mono text-white bg-logo bg-cover h-10 flex items-center px-2 w-10 scale-150 ml-8 rounded-xl"></div>
        <ul className="flex space-x-6 w-1/2 justify-end font-mono">
          <li><Link to="/" className="text-white hover:text-blue-600"> Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-blue-600">About</Link></li>
          <li><Link to="/projects" className="text-white hover:text-blue-600">Projects</Link></li>
          <li><Link to="/contact" className="text-white hover:text-blue-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;