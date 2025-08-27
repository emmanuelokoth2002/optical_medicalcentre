import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Target, 
  Heart, 
  Eye, 
  Shield,
  Star,
  CheckCircle
} from 'lucide-react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <Heart className="value-icon" />,
      title: "Compassion",
      description: "We treat every patient with kindness, empathy, and respect"
    },
    {
      icon: <Eye className="value-icon" />,
      title: "Excellence",
      description: "We maintain the highest standards in eye care and service"
    },
    {
      icon: <Shield className="value-icon" />,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical practices"
    },
    {
      icon: <Target className="value-icon" />,
      title: "Innovation",
      description: "We embrace new technologies and methods to improve care"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Optometrist",
      experience: "15+ years",
      specialty: "Pediatric Eye Care",
      image: "👩‍⚕️"
    },
    {
      name: "Dr. Michael Chen",
      role: "Senior Optometrist",
      experience: "12+ years",
      specialty: "Advanced Imaging",
      image: "👨‍⚕️"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Optometrist",
      experience: "8+ years",
      specialty: "Contact Lenses",
      image: "👩‍⚕️"
    },
    {
      name: "Dr. James Wilson",
      role: "Optometrist",
      experience: "10+ years",
      specialty: "Low Vision",
      image: "👨‍⚕️"
    }
  ];

  const achievements = [
    "Board Certified Optometrists",
    "25+ Years of Combined Experience",
    "State-of-the-Art Equipment",
    "Patient Satisfaction Rate: 98%",
    "Multiple Industry Awards",
    "Continued Education Leaders"
  ];

  // Partnerships – add, remove, or edit partners here
  const partners = [
    {
      name: "Avenue Hospital Kisumu",
      logo: process.env.PUBLIC_URL + '/images/partners/kisumuavenue.png',
      url: 'https://example.com'
    },
    {
      name: "Jaramogi Oginga Odinga Teaching and referral Hospital Eye Clinic",
      logo: process.env.PUBLIC_URL + '/images/partners/jaramogihospital.jiff',
      url: 'https://example.com'
    },
    {
      name: "Kisumu District Hospital",
      logo: process.env.PUBLIC_URL + '/images/partners/kisumudistricthospital.png',
      url: 'https://example.com'
    },
    {
      name: "Sabatia Eye Hospital",
      logo: process.env.PUBLIC_URL + '/images/partners/sabatiaeye.jiff',
      url: 'https://example.com'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-hero-content"
          >
            <h1 className="about-hero-title">About EYE SIGHT OPTICAL AND MEDICAL CENTER LTD.</h1>
            <p className="about-hero-subtitle">
              Dedicated to preserving and enhancing your precious gift of sight through 
              advanced technology, expert care, and compassionate service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-section">
        <div className="container">
          <div className="grid grid-2">
            <motion.div
              className="mission-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-text">
                To provide exceptional eye care services that enhance the quality of life 
                for our patients through innovative technology, personalized treatment plans, 
                and compassionate care. We are committed to maintaining the highest standards 
                of professional excellence while ensuring accessibility to quality eye care for all.
              </p>
              <div className="mission-highlights">
                <div className="highlight-item">
                  <CheckCircle className="highlight-icon" />
                  <span>Comprehensive Eye Care</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle className="highlight-icon" />
                  <span>Advanced Technology</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle className="highlight-icon" />
                  <span>Patient-Centered Approach</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="vision-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Vision</h2>
              <p className="vision-text">
                To be the leading eye care provider in our community, recognized for 
                excellence in patient care, technological innovation, and professional 
                development. We envision a future where everyone has access to quality 
                eye care and can enjoy optimal vision health throughout their lives.
              </p>
              <div className="vision-goals">
                <div className="goal-item">
                  <Target className="goal-icon" />
                  <span>Community Health Leadership</span>
                </div>
                <div className="goal-item">
                  <Target className="goal-icon" />
                  <span>Technological Advancement</span>
                </div>
                <div className="goal-item">
                  <Target className="goal-icon" />
                  <span>Professional Excellence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do and every decision we make
          </p>
          <div className="grid grid-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon-wrapper">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Expert Team</h2>
          <p className="section-subtitle">
            Experienced professionals dedicated to providing you with the best eye care
          </p>
          <div className="grid grid-4">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="team-avatar">
                  <span className="avatar-emoji">{member.image}</span>
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-details">
                  <div className="team-experience">
                    <span className="detail-label">Experience:</span>
                    <span className="detail-value">{member.experience}</span>
                  </div>
                  <div className="team-specialty">
                    <span className="detail-label">Specialty:</span>
                    <span className="detail-value">{member.specialty}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section history-section">
        <div className="container">
          <div className="history-content">
            <motion.div
              className="history-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Journey</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">1998</div>
                  <div className="timeline-content">
                    <h3>Foundation</h3>
                    <p>EyeSight Pro was established with a vision to provide exceptional eye care</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2005</div>
                  <div className="timeline-content">
                    <h3>Expansion</h3>
                    <p>Moved to a larger facility and added advanced diagnostic equipment</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2015</div>
                  <div className="timeline-content">
                    <h3>Innovation</h3>
                    <p>Introduced cutting-edge OCT technology and digital retinal imaging</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2023</div>
                  <div className="timeline-content">
                    <h3>Excellence</h3>
                    <p>Celebrated 25 years of serving our community with excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="history-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="achievement-stats">
                <div className="achievement-item">
                  <Award className="achievement-icon" />
                  <div className="achievement-number">25+</div>
                  <div className="achievement-label">Years of Service</div>
                </div>
                <div className="achievement-item">
                  <Users className="achievement-icon" />
                  <div className="achievement-number">10K+</div>
                  <div className="achievement-label">Patients Served</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="section partnerships-section">
        <div className="container">
          <h2 className="section-title">Our Trusted Partners</h2>
          <p className="section-subtitle">
            We collaborate with leading organizations to deliver outstanding eye care solutions
          </p>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <motion.a
                key={index}
                className="partner-card"
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                title={partner.name}
              >
                <div className="partner-logo" aria-label={partner.name}>
                  {/* If logo missing, fallback to initials */}
                  {partner.logo ? (
                    <img src={partner.logo} alt={partner.name} />
                  ) : (
                    <span className="partner-initials">{partner.name.split(' ').map(w => w[0]).join('').slice(0,3)}</span>
                  )}
                </div>
                <div className="partner-name">{partner.name}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section achievements-section">
        <div className="container">
          <h2 className="section-title">Recognition & Achievements</h2>
          <p className="section-subtitle">
            Our commitment to excellence has been recognized by industry leaders and our community
          </p>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Star className="achievement-star" />
                <span>{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
