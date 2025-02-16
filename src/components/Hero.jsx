import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p class="detail">OFFICIAL DEALER OF WOLKSWAGEN INC.</p>
        <h1>Welcome to [Company Name]</h1>
        <p class ="story">Our dealership has a variety of exclusive and cars that are most sought for at your finger tips, check our list or book an appointment to learn more about the availability of your desired car</p>
        <button>
          <span>
            <span class="container">
              <span class="primary"></span>
              <span class="complimentary"></span>
            </span>
          </span>
          <span>Book a demo</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
