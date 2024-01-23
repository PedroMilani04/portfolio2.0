import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <div className='nav-title'>
                P. Milani
            </div>
            <div className={`navbar-toggle`} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className='bars'/>
            </div>
            <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">About</a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">Services</a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
