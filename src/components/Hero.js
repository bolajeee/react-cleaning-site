import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
      }}
    >
      <div className="hero-content">
        <h1>Professional Cleaning Services</h1>
        <p>Making your space sparkle, one room at a time</p>
        <a href="#contact" className="cta-button">
          Get a Quote
        </a>
      </div>
    </section>
  );
}

export default Hero;
