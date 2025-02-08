import React, { useState } from 'react';
import './Contact.scss';
import imgSrc1 from '../assets/exteriorcrop.PNG'; 
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Import icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/6301938898?text=${whatsappMessage}`, '_blank'); // Replace with your WhatsApp number
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/in_seven_designs', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6301938898', '_blank'); // Replace with your WhatsApp number
  };

  const handleGmailClick = () => {
    window.open('mailto:Insevendesigns@gmail.com', '_blank');
  };

  return (
    <div className="contact-page">
      <div className="contact-div1">
        <div className="contact-content">
          <div className="contact-left-side">
            <div className="contact-text">
              <h2><br></br>GET A QUOTE</h2>
              <p><span className="small-text"><br></br>Request a Quote For Your Next Project.</span></p>
              <p><span className="small-text"><br></br>Infuse Luxurious Excellence into Your Next Project with <strong>INSEVENDESIGNS!</strong></span></p>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div className="contact-image">
            <img src={imgSrc1} alt="About IN SEVEN DESIGNS" />
          </div>
        </div>
      </div>

      <div className="contact-div3">
        <div>
          <h2>CONTACT US</h2>
          <p>For any inquiries or questions contact us:</p>
        </div>
        <div className="contact-container-wrapper">
          <div className="contact-container contact-rating" style={{ backgroundColor:"rgba(50, 50, 50, 0)"}}>
            <p><br></br> 6301938898<br></br>7207070066<br></br></p>
            <button className="whatsapp-button" onClick={handleWhatsAppClick}>
              <FaWhatsapp /> WhatsApp
            </button>
            <p>BHANU PRAKASH</p>
          </div>
          <div className="contact-container contact-rating"  style={{ backgroundColor:"rgba(50, 50, 50, 0)"}}>
            <p><br></br>Mail us @</p>
            <p>Insevendesigns@gmail.com</p>
            <button className="gmail-button" onClick={handleGmailClick}>
              <FaEnvelope /> Email
            </button>
          </div>
          <div className="contact-container contact-rating"  style={{ backgroundColor:"rgba(255, 255, 255, 0)"}}>
            <p><br></br>Reach out us on Instagram</p>
            <p>@in_seven_designs</p>
            <button className="instagram-button" onClick={handleInstagramClick}>
              <FaInstagram /> Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;