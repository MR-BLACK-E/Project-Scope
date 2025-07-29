import { useState } from "react";
import "./DarkTheme.css";
// import './portfolioApp.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HomePage";
import About from "./AboutPage";
import Portfolio from "./PortfolioPage";
import Contact from "./ContactPage";
import Blog from "./BlogPage";
import Navbar from "./Navbar";
// import Navbar from "./Navbar-2";



const  DarkTheme= () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="position1">
    <button onClick={toggleDarkMode} className="toggle-btn position">
        {darkMode ? " ☀️" : "🌙"}
      </button>
      </div>
    
    
    <Router>
   
      <div style={{ display: "flex" }}>
        <Navbar/>
        
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route element={<DarkTheme/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
    

    
    </div>
    </div>
  );
};

export default DarkTheme;
