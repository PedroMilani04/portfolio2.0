import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
function App() {


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Intro />
      <Projects />
      <Contact />
    </div>

  );
}

export default App;
