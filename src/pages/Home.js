import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';
import videoSrc from '../assets/FINAL LOGO INTRO.mp4';
import imgSrc1 from '../assets/div1.PNG'; // Adjust the path as needed
import imgSrc2 from '../assets/2r.png'; // Adjust the path as needed
import imgSrc3 from '../assets/3r.png'; // Adjust the path as needed
import imgSrc4 from '../assets/4r.png'; // Adjust the path as needed
import slide1 from '../assets/slide1.PNG'; // Adjust the path as needed
import slide2 from '../assets/slide2.png'; // Adjust the path as needed
import slide3 from '../assets/slide3.png'; // Adjust the path as needed

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3];
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleViewAllServices = () => {
    navigate('/services');
  };

  const handleViewAboutPage = () => {
    navigate('/about');
  };

  return (
    <div className="home">
      <div className="image-container">
        <div className="mask"></div>
        <div className="text-overlay">
          <h1><br></br><br></br><br></br><br></br><br></br>Transforming Spaces,<br></br>Enhancing Homes.</h1>
        </div>
        <div>
          <video autoPlay loop muted playsInline className="background-video">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="div1">
        <div className="content">
          <div className="text">
            <h2><br></br>ABOUT<br></br>IN SEVEN DESIGNS</h2>
            <p>We provide innovative design solutions that blend luxury with functionality, resulting in unique spaces tailored to your lifestyle.</p>
          </div>
          <div className="image">
            <img src={imgSrc1} alt="About IN SEVEN DESIGNS" />
          </div>
        </div>
        <button className="button" onClick={handleViewAboutPage}>READ MORE</button>
      </div>

      <div className="div2">
        <div className="services">
          <h2><br></br>OUR SERVICES</h2>
          <p>We Offer a Range of Services<br />Crafted to Your Needs.</p>
        </div>
        <div className="container-wrapper">
          <div className="container">
            <img src={imgSrc2} alt="interior" />
            <p>INTERIOR</p>
            <p><br></br>We create stunning interior designs that blend luxury, functionality, and personalized aesthetics to elevate your living spaces.</p>
          </div>
          <div className="container">
            <img src={imgSrc3} alt="exterior" />
            <p>EXTERIOR</p>
            <p><br></br> exterior designs harmonize architecture and landscape, crafting timeless facades that make a lasting impression.</p>
          </div>
          <div className="container">
            <img src={imgSrc4} alt="furniture" />
            <p>FURNITURE</p>
            <p><br></br>We design and create custom furniture that embodies elegance, comfort, and craftsmanship, perfectly tailored to your space.</p>
          </div>
        </div>
        <div>
          <button className="button" onClick={handleViewAllServices}>ALL SERVICES</button>
        </div>
      </div>

      <div className="div3">
        <h2><br></br>FEATURED DESIGNS</h2>
        <div className="carousel">
          <button className="prev" onClick={prevSlide}>&#10094;</button>
          <div className="slides">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className={index === currentSlide ? 'active' : ''}
              />
            ))}
          </div>
          <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
