import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About'; 
import Projects from './pages/Projects'; 
import Contact from './pages/Contact'; 
import Home from './pages/Home';
import NavigationBar from './components/navigationBar';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col items-center">
      <NavigationBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;