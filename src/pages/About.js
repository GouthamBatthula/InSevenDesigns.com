import React, { useEffect } from 'react';
import './About.scss';
import imgSrc1 from '../assets/carpenter.jpeg';
import imgSrc2 from '../assets/rating.png';
import imgSrc3 from '../assets/fivestars.png';

const Home = () => {
  useEffect(() => {}, []);

  return (
    <div className="home">
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
      </div>

      <div className="div2">
        <div className="services">
          <h2><br></br>RENOWNED FOR</h2>
        </div>
        <div className="container-wrapper">
          <div className="container">
            <p>ENGAGING</p>
            <p><br></br>"We are highly responsive and engaging in all interactions, ensuring personalized communication with clients to understand their unique preferences and deliver tailored design solutions that reflect their vision and style..</p>
          </div>
          <div className="container">
            <p>ADAPTIVE</p>
            <p><br></br>Our company follows an adaptive approach, considering environmental conditions and seasonal changes to create designs that harmonize with the site’s natural surroundings.</p>
          </div>
          <div className="container">
            <p>RATING</p>
            <img src={imgSrc2} alt="About IN SEVEN DESIGNS" style={{ maxWidth: '50%' }} />
            <p>We are proud to announce the successful completion of 50+ projects, demonstrating our commitment to excellence and delivering impactful results.</p>
            <p><br></br></p>
          </div>
        </div>
      </div>

      <div className="div3">
        <div>
          <h2>Client Success Stories: Hear What Our Clients Say</h2>
        </div>
        <div className="container-wrapper">
          <div className="container rating" style={{ backgroundColor:"rgba(50, 50, 50, 0)"}}>
          <img src={imgSrc3} alt="About IN SEVEN DESIGNS" style={{ maxWidth: '80%' }} />
          <p><br></br>Loved the work! Attention to detail was the most fav part of mine which made every corner look beautiful and complete.100% recommended.</p>
            <p><br></br>DEEKSHITHA PATEL</p>
            <p>Uppal, HYDERABAD</p>
          </div>
          <div className="container rating"  style={{ backgroundColor:"rgba(50, 50, 50, 0)"}}>
          <img src={imgSrc3} alt="About IN SEVEN DESIGNS" style={{ maxWidth: '80%' }} />
            
            <p><br></br>Have been working closely with the team and they have only delivered the best possible solutions and results. One of the most trustworthy interior designer with a truckload of creativity. Looking forward to working more with them in the upcoming days.</p>
            <p><br></br>VIPASSANA THAKUR</p>
            <p>Gachibowli, HYDERABAD</p>
          </div>
          <div className="container rating"  style={{ backgroundColor:"rgba(255, 255, 255, 0)"}}>
            <img src={imgSrc3} alt="About IN SEVEN DESIGNS" style={{ maxWidth: '80%' }} />
            <p><br></br>Your ability to transform spaces into stunning masterpieces is remarkable. Absolutely love your aesthetic sense!</p>
            <p><br></br>GOUTHAM BATTHULA</p>
            <p>Kokapet, HYDERABAD</p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;