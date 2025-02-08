import React, { useEffect } from 'react';
import './Services.scss';
import imgSrc1 from '../assets/cafe.PNG'; // Adjust the path as needed
import imgSrc2 from '../assets/exterior.PNG'; // Adjust the path as needed
import imgSrc3 from '../assets/furniture.png'; // Adjust the path as needed
import imgSrc4 from '../assets/key.png'; // Adjust the path as needed

const Services = () => {
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
    <div className="services-page">
      <h2>OUR SERVICES</h2>
      <p>We Offer a Wide Range of Services to Meet Your Needs</p>
      <div className="services-list" style={{ backgroundImage: `url(${imgSrc1})` }}>
        <h1>INTERIOR DESIGNING</h1>
        <div className="service-item">
          <h2>RESIDENTIAL</h2>
          <p>
            <li>Independent Houses</li>
            <li>Apartments</li>
            <li>Villas</li>
          </p>
        </div>
        <div className="service-item">
          <h2>COMMERCIAL</h2>
          <p>
            <li>Cafes</li>
            <li>Restaurants</li>
            <li>Office Spaces</li>
            <li>Hotels</li>
            <li>Shopping Malls</li>
          </p>
        </div>
      </div>

      <div className="services-list" style={{ backgroundImage: `url(${imgSrc2})` }}>
        <h1>EXTERIOR DESIGNING</h1>
        <div className="service-item">
          <h2>EXTERIOR DESIGN</h2>
          <p>
            <li>Landscaping</li>
            <li>Container Houses</li>
            <li>Farm House</li>
            <li>Pent House</li>
            <li>Woodenhouse Construction</li>
          </p>
        </div>
      </div>

      <div className="services-list" style={{ backgroundImage: `url(${imgSrc3})` }}>
        <h1>FURNITURE</h1>
        <div className="service-item">
          <h2>FURNITURE</h2>
          <p>
            <li>Sofa</li>
            <li>Beds</li>
            <li>Dining Tables</li>
            <li>Wicker Furniture</li>
          </p>
        </div>
      </div>

      <div className="services-list" style={{ backgroundImage: `url(${imgSrc4})` }}>
        <h1>KEY SERVICES</h1>
        <div className="service-item">
          <h2>KEY SERVICES</h2>
          <p>
            <li>Carpentry</li>
            <li>Painting</li>
            <li>Plumbing</li>
            <li>False Ceiling</li>
            <li>Glass Works</li>
            <li>Fabrication</li>
            <li>Electric</li>
            <li>Lighting</li>
            <li>2D Designs</li>
            <li>3D Designs</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;