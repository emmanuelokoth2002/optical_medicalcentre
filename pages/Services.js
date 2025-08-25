import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Glasses, Microscope, Stethoscope, Shield, Zap, Users, Award } from 'lucide-react';
import './Services.css';

const Services = () => {
  const coreServices = [
    {
      icon: <Eye size={32} />,
      title: "Comprehensive Eye Exams",
      description: "Complete vision assessment including retinoscopy, slit lamp examination, and visual acuity testing.",
      features: ["Retinoscopy", "Slit Lamp Examination", "Visual Acuity Testing", "Eye Pressure Measurement"]
    },
    {
      icon: <Glasses size={32} />,
      title: "Eyeglasses & Sunglasses",
      description: "Wide spectrum of frames and lenses for men, women, and children with professional fitting services.",
      features: ["Prescription Glasses", "Sunglasses", "Children's Frames", "Professional Fitting", "Glazing & Repairs"]
    },
    {
      icon: <Microscope size={32} />,
      title: "Contact Lens Services",
      description: "Professional contact lens fitting, evaluation, and follow-up care for optimal comfort and vision.",
      features: ["Contact Lens Fitting", "Follow-up Care", "Lens Care Education", "Specialty Lenses"]
    },
    {
      icon: <Stethoscope size={32} />,
      title: "Medical Eye Care",
      description: "Diagnosis and treatment of eye diseases including glaucoma, diabetic retinopathy, and cataracts.",
      features: ["Glaucoma Treatment", "Diabetic Retinopathy", "Cataract Surgery", "Age-related Macular Degeneration"]
    }
  ];

  const specializedServices = [
    {
      icon: <Shield size={32} />,
      title: "Low Vision Aids",
      description: "Specialized equipment and devices to help patients with low vision maintain independence.",
      features: ["Magnifiers", "Special Lamps", "Low Vision Devices", "Rehabilitation Services"]
    },
    {
      icon: <Zap size={32} />,
      title: "Digital Clinical Tools",
      description: "Advanced software solutions and digital tools for efficient diagnosis and continuity of care.",
      features: ["Digital Imaging", "Electronic Health Records", "Telemedicine Capabilities", "Advanced Diagnostics"]
    },
    {
      icon: <Users size={32} />,
      title: "Medical Outreach Programs",
      description: "Community health initiatives reaching schools, public sector, and private entities.",
      features: ["School Screenings", "Corporate Wellness", "Public Health Campaigns", "Community Education"]
    },
    {
      icon: <Award size={32} />,
      title: "Professional Consultation",
      description: "Expert medical consultation and second opinions for complex eye conditions.",
      features: ["Specialist Consultation", "Second Opinions", "Treatment Planning", "Follow-up Care"]
    }
  ];

  const paymentOptions = [
    "Cash Payments",
    "M-Pesa Mobile Money",
    "NHIF Insurance",
    "Private Insurance",
    "Corporate Group Insurance"
  ];

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Comprehensive Services</h1>
            <p>Professional optical and medical care with the latest technology and digital clinical tools</p>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="core-services">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Core Services</h2>
            <p>Comprehensive eye care services delivered with excellence and care</p>
          </motion.div>
          
          <div className="services-grid">
            {coreServices.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="specialized-services">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Specialized Services</h2>
            <p>Advanced care and specialized solutions for complex eye health needs</p>
          </motion.div>
          
          <div className="services-grid">
            {specializedServices.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="technology">
        <div className="container">
          <motion.div 
            className="technology-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="technology-text">
              <h2>Advanced Technology & Digital Solutions</h2>
              <p>
                Eye Sight Optical And Medical Centre Ltd incorporates application of software solutions with 
                digital clinical tools pivotal for efficiency and continuity of care through connection of eye care pathways.
              </p>
              <ul>
                <li>Clinical decisions derived from superior quality data</li>
                <li>Digital imaging and advanced diagnostic tools</li>
                <li>Electronic health records for better patient care</li>
                <li>Telemedicine capabilities for remote consultations</li>
              </ul>
            </div>
            <div className="technology-visual">
              <div className="tech-icon">
                <Zap size={64} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="payment-options">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Flexible Payment Options</h2>
            <p>We offer multiple payment methods to make our services accessible to everyone</p>
          </motion.div>
          
          <div className="payment-grid">
            {paymentOptions.map((option, index) => (
              <motion.div 
                key={index}
                className="payment-option"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{option}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
