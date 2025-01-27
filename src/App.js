import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  // Contact Form Submission Handler
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Thank you for your message! We will get back to you soon.");
  //   e.target.reset();
  // };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
