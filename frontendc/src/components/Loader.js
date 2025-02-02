// src/components/Loader.js
import React from 'react';
import '../style/Loader.css'; // Style for the loader

function Loader() {
  return (
    <div className="loader-overlay">
      <div className="spinner"></div>
    </div>
  );
}

export default Loader;
