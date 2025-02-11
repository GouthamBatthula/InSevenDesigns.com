// src/components/Footer/Footer.js
import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faInstagram, faYoutube, faWhatsapp, faFacebook);

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} INSEVENDESIGNS. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.instagram.com/in_seven_designs/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.youtube.com/@InSevenDesigns" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://wa.me/+916301938898?text=Hello%20INSEVENDESIGNS" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://www.facebook.com/share/19t1T5PrsA/?mibextid=wwXIfr " target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;