import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-brand">
              <Eye className="footer-brand-icon" />
              <span className="footer-brand-name"> EYE SIGHT OPTICAL AND MEDICAL CENTER LTD</span>
            </div>
            <p className="footer-description">
              Your trusted partner for comprehensive eye care. We combine advanced technology 
              with compassionate care to ensure optimal vision health for you and your family.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook className="social-icon" />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter className="social-icon" />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram className="social-icon" />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin className="social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/appointments">Book Appointment</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Our Services</h3>
            <ul className="footer-links">
              <li>Comprehensive Eye Exams</li>
              <li>Eyewear & Contact Lenses</li>
              <li>Advanced Imaging</li>
              <li>Pediatric Eye Care</li>
              <li>Emergency Eye Care</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Contact Info</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <p>123 Vision Street</p>
                  <p>Optical District</p>
                  <p>Kisumu, Kenya</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <p>Main: +254 727864012</p>
                  <p>Secondary: +254 715888505</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  {/* <p>appointments@eyesightpro.com</p> */}
                  <p>eyesightopticalmedicalltd@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <Clock className="contact-icon" />
                <div>
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} EyeSight Pro. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="scroll-icon" />
      </button>
    </footer>
  );
};

export default Footer;
