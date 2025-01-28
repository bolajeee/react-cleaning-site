import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url("https://img.freepik.com/free-photo/housekeeping-concept-with-cleaning-products_23-2147917262.jpg?ga=GA1.1.1138727340.1738007952&semt=ais_hybrid")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "white",
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
