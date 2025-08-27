import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus({ type: '', message: '' });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="contact-icon" />,
      title: "Visit Us",
      details: [
        "123 Vision Street",
        "Optical District",
        "KISUMU, KENYA"
      ]
    },
    {
      icon: <Phone className="contact-icon" />,
      title: "Call Us",
      details: [
        "Main: +254 727864012",
        "Secondary: +254 715888505"
      ]
    },
    {
      icon: <Mail className="contact-icon" />,
      title: "Email Us",
      details: [
        "eyesightopticalmedicalltd@gmail.com",
      ]
    },
    {
      icon: <Clock className="contact-icon" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const services = [
    "Comprehensive Eye Exams",
    "Eyewear & Contact Lenses",
    "Advanced Imaging",
    "Pediatric Eye Care",
    "Emergency Eye Care",
    "Computer Vision Syndrome"
  ];

  // Google Maps URLs for the clinic
  const mapsAddress = '123 Vision Street, Optical District, Kisumu, Kenya';
  const mapsQuery = encodeURIComponent(mapsAddress);
  const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-hero-content"
          >
            <h1 className="contact-hero-title">Get in Touch</h1>
            <p className="contact-hero-subtitle">
              We're here to help with all your eye care needs. Reach out to us today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section contact-info-section">
        <div className="container">
          <h2 className="section-title">Contact Information</h2>
          <p className="section-subtitle">
            Multiple ways to reach us for appointments, questions, or support
          </p>
          <div className="grid grid-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="contact-info-icon-wrapper">
                  {info.icon}
                </div>
                <h3 className="contact-info-title">{info.title}</h3>
                <div className="contact-info-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="contact-detail">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="grid grid-2">
            {/* Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Send Us a Message</h2>
              <p className="section-subtitle">
                Have a question or need to schedule an appointment? Fill out the form below.
              </p>
              
              {formStatus.message && (
                <div className={`form-status ${formStatus.type}`}>
                  {formStatus.type === 'success' ? (
                    <CheckCircle className="status-icon" />
                  ) : (
                    <AlertCircle className="status-icon" />
                  )}
                  <span>{formStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Appointment Booking</option>
                      <option value="general">General Inquiry</option>
                      <option value="service">Service Information</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Please describe your inquiry or request..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  <Send className="btn-icon" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              className="contact-map-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="map-placeholder">
                <div className="map-content">
                  <MapPin className="map-icon" />
                  <h3>Our Location</h3>
                  <p>123 Vision Street, Optical District</p>
                  <p>Kisumu, Kenya</p>
                  <div className="map-actions">
                    <a className="btn btn-secondary" href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">Get Directions</a>
                    <a className="btn btn-secondary" href={mapsPlaceUrl} target="_blank" rel="noopener noreferrer">View on Map</a>
                  </div>
                </div>
              </div>

              <div className="additional-info">
                <h3>Quick Links</h3>
                <div className="services-list">
                  {services.map((service, index) => (
                    <div key={index} className="service-item">
                      <span className="service-bullet">•</span>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers to common questions about our services and policies
          </p>
          <div className="faq-grid">
            <motion.div
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>How do I schedule an appointment?</h3>
              <p>You can schedule an appointment by calling us at (555) 123-4567, using our online booking system, or filling out the contact form above.</p>
            </motion.div>
            <motion.div
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>What should I bring to my appointment?</h3>
              <p>Please bring your current glasses/contacts, insurance information, a list of current medications, and any previous eye exam records.</p>
            </motion.div>
            <motion.div
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Do you accept insurance?</h3>
              <p>Yes, we accept most major insurance plans. Please contact us to verify your specific coverage and benefits.</p>
            </motion.div>
            <motion.div
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>How long does an eye exam take?</h3>
              <p>A comprehensive eye exam typically takes 45-60 minutes, depending on the complexity of your vision needs and any additional testing required.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
