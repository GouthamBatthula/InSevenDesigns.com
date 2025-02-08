// src/components/Header/Header.js
import React, { useState, useEffect } from 'react';
import './Header.scss';
import imgSrc from '../assets/mainlogo.png'; // Adjust the path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBars);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <img src={imgSrc} alt="Logo" className="logo" />
      <button className="burger-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} style={{ color: 'white', fontSize: '30px' }} />
              {/* Add fallback text */}
         <span style={{ color: 'yellow' }}></span> 
        </button>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/contact">CONTACT</a></li>
          <li><a href="/services">SERVICES</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;