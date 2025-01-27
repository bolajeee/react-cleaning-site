import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-content">
          <div className="footer-section company-info">
            <h3>SparkleClean</h3>
            <p>
              Making spaces sparkle since 2010. Your trusted partner in
              professional cleaning services.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>123 Clean Street, Sparkle City, SC 12345</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>(555) 123-4567</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>info@sparkleclean.com</p>
              </div>
            </div>
          </div>

          <div className="footer-section quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section services-links">
            <h3>Our Services</h3>
            <ul>
              <li>
                <a href="#residential">Residential Cleaning</a>
              </li>
              <li>
                <a href="#commercial">Commercial Cleaning</a>
              </li>
              <li>
                <a href="#deep">Deep Cleaning</a>
              </li>
              <li>
                <a href="#window">Window Cleaning</a>
              </li>
              <li>
                <a href="#carpet">Carpet Cleaning</a>
              </li>
            </ul>
          </div>

          <div className="footer-section newsletter">
            <h3>Newsletter</h3>
            <p>
              Subscribe to our newsletter for cleaning tips and exclusive
              offers.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            <div className="social-links">
              <button
                onClick={() => window.open("https://facebook.com/sparkleclean")}
                className="social-link"
              >
                <i className="fab fa-facebook-f"></i>
              </button>
              <button
                onClick={() => window.open("https://twitter.com/sparkleclean")}
                className="social-link"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                onClick={() =>
                  window.open("https://instagram.com/sparkleclean")
                }
                className="social-link"
              >
                <i className="fab fa-instagram"></i>
              </button>
              <button
                onClick={() =>
                  window.open("https://linkedin.com/company/sparkleclean")
                }
                className="social-link"
              >
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} SparkleClean. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
