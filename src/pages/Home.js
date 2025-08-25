import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Glasses, 
  Heart, 
  Shield, 
  Star, 
  ArrowRight,
  Calendar,
  MapPin,
  Clock
} from 'lucide-react';
import './Home.css';
import ImageSlideshow from '../components/ImageSlideshow';

const Home = () => {
  const features = [
    {
      icon: <Eye className="feature-icon" />,
      title: "Comprehensive Eye Exams",
      description: "State-of-the-art diagnostic equipment for thorough eye health assessments"
    },
    {
      icon: <Glasses className="feature-icon" />,
      title: "Premium Eyewear",
      description: "Latest designer frames and advanced lens technology for optimal vision"
    },
    {
      icon: <Heart className="feature-icon" />,
      title: "Patient Care",
      description: "Personalized treatment plans with compassionate, experienced professionals"
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Advanced Technology",
      description: "Cutting-edge equipment for accurate diagnosis and effective treatment"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Atieno",
      role: "Patient",
      text: "The team at EyeSight Pro is exceptional! They made my eye exam comfortable and explained everything clearly.",
      rating: 5
    },
    {
      name: "Michael Odhiambo",
      role: "Patient",
      text: "Best eye care experience I've ever had. Professional staff and modern facility with excellent service.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Patient",
      text: "I love my new glasses! The selection is amazing and the optometrist was very thorough in her examination.",
      rating: 5
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Patients" },
    { number: "25+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Emergency Support" }
  ];

  const heroImages = [
    { src: process.env.PUBLIC_URL + '/images/home/hero-1.jpg', placeholder: process.env.PUBLIC_URL + '/images/home/hero-1-blur.jpg' },
    { src: process.env.PUBLIC_URL + '/images/home/hero-2.jpg', placeholder: process.env.PUBLIC_URL + '/images/home/hero-2-blur.jpg' },
    { src: process.env.PUBLIC_URL + '/images/home/hero-3.jpg', placeholder: process.env.PUBLIC_URL + '/images/home/hero-3-blur.jpg' },
    { src: process.env.PUBLIC_URL + '/images/home/hero-4.jpg', placeholder: process.env.PUBLIC_URL + '/images/home/hero-4-blur.jpg' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Your Vision, Our <span className="highlight">Priority</span>
              </h1>
              <p className="hero-subtitle">
                Experience world-class eye care with cutting-edge technology and compassionate professionals. 
                We're dedicated to preserving and enhancing your precious gift of sight.
              </p>
              <div className="hero-buttons">
                <Link to="/appointments" className="btn btn-primary">
                  Book Appointment
                  <ArrowRight className="btn-icon" />
                </Link>
                <Link to="/services" className="btn btn-secondary">
                  Our Services
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-visual">
                <ImageSlideshow images={heroImages} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose EyeSight Pro?</h2>
          <p className="section-subtitle">
            We combine expertise, technology, and compassion to deliver exceptional eye care
          </p>
          <div className="grid grid-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="grid grid-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="cta-title">Ready to See the World Clearly?</h2>
              <p className="cta-subtitle">
                Book your appointment today and take the first step towards better vision
              </p>
              <div className="cta-info">
                <div className="cta-info-item">
                  <Calendar className="cta-icon" />
                  <span>Same Day Appointments Available</span>
                </div>
                <div className="cta-info-item">
                  <MapPin className="cta-icon" />
                  <span>Convenient Location</span>
                </div>
                <div className="cta-info-item">
                  <Clock className="cta-icon" />
                  <span>Extended Hours</span>
                </div>
              </div>
              <Link to="/appointments" className="btn btn-primary btn-large">
                Schedule Your Visit
                <ArrowRight className="btn-icon" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied patients
          </p>
          <div className="grid grid-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="star-icon filled" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
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
