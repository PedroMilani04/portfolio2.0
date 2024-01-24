import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };


  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="nav-title">P. Milani</div>
      <div className={`navbar-toggle`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className='bars' />
      </div>
      <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <Link onClick={scrollToTop} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="intro" smooth={true} duration={800} offset={-175}>
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="projects" smooth={true} duration={800} offset={600}>
            Services
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
