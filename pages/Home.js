import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, Users, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import ImageSlideshow from '../components/ImageSlideshow';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <Eye size={32} />,
      title: "Comprehensive Eye Care",
      description: "From routine eye exams to advanced surgical procedures including cataract surgery and glaucoma treatment."
    },
    {
      icon: <Users size={32} />,
      title: "Expert Medical Team",
      description: "Experienced professionals providing quality care with the latest technology and digital clinical tools."
    },
    {
      icon: <Award size={32} />,
      title: "Quality Products",
      description: "Wide spectrum of eyeglasses, sunglasses, contact lenses, and low vision aids for all ages."
    },
    {
      icon: <Clock size={32} />,
      title: "Convenient Access",
      description: "Multiple payment options including M-Pesa, NHIF, and private insurance for your convenience."
    }
  ];

  const stats = [
    { number: "3000+", label: "Patients Diagnosed" },
    { number: "2500+", label: "Eyeglasses Dispensed" },
    { number: "2000+", label: "Referred Patients" },
    { number: "8+", label: "Years of Excellence" }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Patient",
      content: "The quality of care and attention to detail is exceptional. They truly care about their patients' vision health.",
      rating: 5
    },
    {
      name: "John K.",
      role: "Patient",
      content: "Professional service with modern technology. The staff is knowledgeable and very helpful.",
      rating: 5
    },
    {
      name: "Mary W.",
      role: "Patient",
      content: "Excellent experience from diagnosis to getting my new glasses. Highly recommend their services.",
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>EYE SIGHT OPTICAL & MEDICAL CENTRE LTD</h1>
            <p className="hero-subtitle">Leading Optical Health & Wellness Provider in the Lake Region</p>
            <p className="hero-description">
              We are committed to being approachable by improving our availability, increasing patient choice, 
              improving on convenience and investing in the latest technology for faster optical intervention.
            </p>
            <div className="hero-buttons">
              <Link to="/appointments" className="btn btn-primary">
                Book Your Appointment
                <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Slideshow Section */}
      <section className="slideshow-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Experience Our World-Class Facilities</h2>
            <p>Take a visual tour of our modern optical and medical centre</p>
          </motion.div>
          <ImageSlideshow />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose EYE SIGHT OPTICAL & MEDICAL CENTRE?</h2>
            <p>Your trusted partner for comprehensive optical health and wellness</p>
          </motion.div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Experience Better Vision?</h2>
            <p>Join thousands of satisfied patients who trust us with their eye care needs</p>
            <Link to="/appointments" className="btn btn-primary">
              Schedule Your Visit Today
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>What Our Patients Say</h2>
            <p>Real experiences from our valued patients</p>
          </motion.div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircle key={i} size={20} className="star" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
