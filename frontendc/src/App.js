import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Community from './components/Community';
import CarList from './components/CarList';
import Loader from './components/Loader'; 

function App() {
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  // Simulate data fetching or page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <div className='app_render'>
      {isLoading && <Loader />} {/* Show loader while loading */}
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-of-car" element={<CarList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </div>
  );
}

export default App;
