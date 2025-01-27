import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${process.env.PUBLIC_URL + "/images/header.jpg"});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
`;

function Hero() {
  return (
    <HeroSection id="home">
      <div className="hero-content">
        <h1>Professional Cleaning Services</h1>
        <p>Making your space sparkle, one room at a time</p>
        <a href="#contact" className="cta-button">
          Get a Quote
        </a>
      </div>
    </HeroSection>
  );
}

export default Hero;
