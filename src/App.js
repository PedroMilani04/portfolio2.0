import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
function App() {
 

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Intro />
    </div>
  );
}

export default App;
