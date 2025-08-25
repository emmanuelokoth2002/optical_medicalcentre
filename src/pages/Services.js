import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Glasses, 
  Heart, 
  Shield, 
  Camera, 
  Monitor,
  Smartphone,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const mainServices = [
    {
      icon: <Eye className="service-icon" />,
      title: "Comprehensive Eye Exams",
      description: "Thorough eye health assessments using advanced diagnostic technology",
      features: [
        "Visual acuity testing",
        "Eye pressure measurement",
        "Retinal imaging",
        "Color vision testing",
        "Depth perception assessment"
      ],
      price: "From Ksh",
      duration: "45-60 minutes"
    },
    {
      icon: <Glasses className="service-icon" />,
      title: "Eyewear & Contact Lenses",
      description: "Premium frames and advanced lens technology for optimal vision",
      features: [
        "Designer frame selection",
        "Progressive lenses",
        "Anti-reflective coatings",
        "Blue light protection",
        "Contact lens fitting"
      ],
      price: "From Ksh",
      duration: "30-45 minutes"
    },
    {
      icon: <Camera className="service-icon" />,
      title: "Advanced Imaging",
      description: "State-of-the-art retinal photography and OCT scanning",
      features: [
        "Retinal photography",
        "OCT scanning",
        "Corneal topography",
        "Visual field testing",
        "Fundus photography"
      ],
      price: "From Ksh",
      duration: "20-30 minutes"
    }
  ];

  const specializedServices = [
    {
      icon: <Heart className="service-icon" />,
      title: "Pediatric Eye Care",
      description: "Specialized eye care for children and young adults"
    },
    {
      icon: <Shield className="service-icon" />,
      title: "Emergency Eye Care",
      description: "24/7 emergency services for urgent eye conditions"
    },
    {
      icon: <Monitor className="service-icon" />,
      title: "Computer Vision Syndrome",
      description: "Treatment for digital eye strain and computer-related vision issues"
    },
    {
      icon: <Smartphone className="service-icon" />,
      title: "Low Vision Services",
      description: "Specialized care for patients with significant vision loss"
    }
  ];

  const technology = [
    "Optical Coherence Tomography (OCT)",
    "Digital Retinal Photography",
    "Automated Visual Field Testing",
    "Corneal Topography",
    "Advanced Lens Technology",
    "Electronic Health Records"
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="services-hero-content"
          >
            <h1 className="services-hero-title">Our Services</h1>
            <p className="services-hero-subtitle">
              Comprehensive eye care services delivered with cutting-edge technology and compassionate care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section main-services-section">
        <div className="container">
          <h2 className="section-title">Core Services</h2>
          <p className="section-subtitle">
            Our comprehensive range of eye care services designed to meet all your vision needs
          </p>
          <div className="grid grid-3">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-meta">
                  <div className="service-price">{service.price}</div>
                  <div className="service-duration">{service.duration}</div>
                </div>

                <Link to="/appointments" className="btn btn-primary service-btn">
                  Book Appointment
                  <ArrowRight className="btn-icon" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="section specialized-services-section">
        <div className="container">
          <h2 className="section-title">Specialized Care</h2>
          <p className="section-subtitle">
            Additional services for specific eye care needs and conditions
          </p>
          <div className="grid grid-4">
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                className="specialized-service-card card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="specialized-service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="specialized-service-title">{service.title}</h3>
                <p className="specialized-service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section technology-section">
        <div className="container">
          <div className="technology-content">
            <motion.div
              className="technology-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Advanced Technology</h2>
              <p className="section-subtitle">
                We invest in the latest diagnostic and treatment technology to provide you with the most accurate and effective eye care
              </p>
              <div className="technology-list">
                {technology.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="technology-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Zap className="tech-icon" />
                    <span>{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="technology-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="tech-grid">
                <div className="tech-item">
                  <Monitor className="tech-grid-icon" />
                </div>
                <div className="tech-item">
                  <Camera className="tech-grid-icon" />
                </div>
                <div className="tech-item">
                  <Eye className="tech-grid-icon" />
                </div>
                <div className="tech-item">
                  <Glasses className="tech-grid-icon" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section services-cta-section">
        <div className="container">
          <motion.div
            className="services-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="services-cta-title">Ready to Experience Better Vision?</h2>
            <p className="services-cta-subtitle">
              Schedule your appointment today and discover the difference our advanced technology and expert care can make
            </p>
            <div className="services-cta-buttons">
              <Link to="/appointments" className="btn btn-primary btn-large">
                Book Your Appointment
                <ArrowRight className="btn-icon" />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
