import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, MapPin, TrendingUp, CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <CheckCircle size={32} />,
      title: "Customer Satisfaction",
      description: "This is top in our list of priorities when customers are able to earn value for money."
    },
    {
      icon: <Award size={32} />,
      title: "Quality",
      description: "Eye Sight Optical And Medical Centre Ltd prides itself in dispensation of high-quality services and products for both customer retention and multiplier effect."
    },
    {
      icon: <Users size={32} />,
      title: "Convenience",
      description: "On account of ensuring enhanced service delivery, we labor to redefine convenience in our operations to provide our clients with readily available procedures."
    }
  ];

  const team = [
    {
      name: "Dr. Medical Director",
      role: "Medical Director",
      description: "Leading our medical team with years of experience in ophthalmology and optical care."
    },
    {
      name: "Optical Specialist",
      role: "Senior Optometrist",
      description: "Expert in comprehensive eye examinations and prescription services."
    },
    {
      name: "Clinical Team",
      role: "Medical Staff",
      description: "Dedicated professionals providing quality care with the latest technology."
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Eye Sight Optical And Medical Centre Ltd established with focus on optical health and wellness."
    },
    {
      year: "2017",
      title: "Service Expansion",
      description: "Expanded services to include advanced medical procedures and digital clinical tools."
    },
    {
      year: "2019",
      title: "Technology Integration",
      description: "Incorporated software solutions and digital clinical tools for efficiency and continuity of care."
    },
    {
      year: "2021",
      title: "Regional Growth",
      description: "Extended operations across Lake Region counties including Siaya, Kakamega, Homabay, Migori and Kisii."
    },
    {
      year: "2023",
      title: "Future Vision",
      description: "Continuing to expand with wider payment options and designer products for client specifications."
    }
  ];

  const partners = [
    "Avenue Hospital Kisumu",
    "Jaramogi Oginga Odinga Teaching and Referral Hospital Eye Clinic",
    "Kisumu District Hospital",
    "Sabatia Eye Hospital"
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About EYE SIGHT OPTICAL & MEDICAL CENTRE LTD</h1>
            <p>Leading optical health and wellness provider in the Lake Region</p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <motion.div 
              className="mission-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">
                <Target size={48} />
              </div>
              <h2>Our Mission</h2>
              <p>
                We are committed to being approachable by improving our availability, 
                increasing patient choice, improving on convenience and investing in 
                the latest technology for faster optical intervention.
              </p>
            </motion.div>

            <motion.div 
              className="vision-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">
                <Eye size={48} />
              </div>
              <h2>Our Vision</h2>
              <p>
                To spread optical health, promote better eye care and facilitate their accessibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="values">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Company Values</h2>
            <p>The principles that guide our operations and service delivery</p>
          </motion.div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <motion.div 
            className="overview-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Company Overview</h2>
            <p>
              EYE SIGHT OPTICAL AND MEDICAL CENTRE LTD's focus rotates around optical health and wellness. 
              The urge to avail ideal optical procedures and quality accessories that would champion the optical 
              dream of the company's visionary necessitated the composition of the company which stands out as 
              one of the most competent medical outlets in the entire resident county and by extension the lake region.
            </p>
            <p>
              The company endeavors to extend its operations far and wide across the lake region counties of 
              Siaya, Kakamega, Homabay, Migori and Kisii. We also look forward to providing a wider range 
              of payment options for our esteemed clients aside from cash. These includes Mpesa, Individual 
              NHIF Insurance, Individual Private Insurance for employees and civil servants as well as group 
              life for corporate entities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="timeline">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Journey</h2>
            <p>From establishment to becoming a leading optical health provider</p>
          </motion.div>
          
          <div className="timeline-container">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Partners</h2>
            <p>We are proud to be associated with distinguished medical facilities</p>
          </motion.div>
          
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                className="partner-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{partner}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="future-plans">
        <div className="container">
          <motion.div 
            className="plans-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="plans-text">
              <h2>Future Plans</h2>
              <p>
                We also anticipate to offer a wider range of designer products that would best fit each 
                client's specifications and preference. Our commitment to growth and excellence continues 
                as we expand our services and reach more communities across the Lake Region.
              </p>
              <div className="plans-features">
                <div className="plan-feature">
                  <TrendingUp size={24} />
                  <span>Expanded Branch Network</span>
                </div>
                <div className="plan-feature">
                  <MapPin size={24} />
                  <span>Regional Coverage</span>
                </div>
                <div className="plan-feature">
                  <Award size={24} />
                  <span>Enhanced Product Range</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
