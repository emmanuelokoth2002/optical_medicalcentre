import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Eye,
  CheckCircle,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import './Appointments.css';

const Appointments = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    reason: '',
    insurance: '',
    notes: ''
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
    setFormStatus({ type: 'success', message: 'Appointment booked successfully! We\'ll send you a confirmation email shortly.' });
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      reason: '',
      insurance: '',
      notes: ''
    });

    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus({ type: '', message: '' });
    }, 5000);
  };

  const services = [
    "Comprehensive Eye Exam",
    "Contact Lens Fitting",
    "Eyeglass Fitting",
    "Advanced Imaging (OCT)",
    "Pediatric Eye Care",
    "Emergency Eye Care",
    "Follow-up Visit",
    "Other"
  ];

  const timeSlots = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ];

  const benefits = [
    {
      icon: <Calendar className="benefit-icon" />,
      title: "Easy Scheduling",
      description: "Book appointments online 24/7 or call us during business hours"
    },
    {
      icon: <Clock className="benefit-icon" />,
      title: "Flexible Hours",
      description: "Extended hours and Saturday appointments available"
    },
    {
      icon: <User className="benefit-icon" />,
      title: "Expert Care",
      description: "Experienced optometrists with advanced training"
    },
    {
      icon: <Eye className="benefit-icon" />,
      title: "Modern Technology",
      description: "State-of-the-art equipment for accurate diagnosis"
    }
  ];

  return (
    <div className="appointments-page">
      {/* Hero Section */}
      <section className="appointments-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="appointments-hero-content"
          >
            <h1 className="appointments-hero-title">Book Your Appointment</h1>
            <p className="appointments-hero-subtitle">
              Schedule your eye care appointment with our experienced professionals. 
              We're here to help you see clearly and maintain optimal eye health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose EyeSight Pro?</h2>
          <p className="section-subtitle">
            Experience the difference of professional, compassionate eye care
          </p>
          <div className="grid grid-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="benefit-icon-wrapper">
                  {benefit.icon}
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="section appointment-form-section">
        <div className="container">
          <div className="grid grid-2">
            {/* Appointment Form */}
            <motion.div
              className="appointment-form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Schedule Your Visit</h2>
              <p className="section-subtitle">
                Fill out the form below to book your appointment. We'll confirm your booking via email.
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

              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="form-row">
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
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time *</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Type *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="reason">Reason for Visit</label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Please describe the reason for your visit..."
                  ></textarea>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="insurance">Insurance Provider</label>
                    <input
                      type="text"
                      id="insurance"
                      name="insurance"
                      value={formData.insurance}
                      onChange={handleInputChange}
                      placeholder="Enter your insurance provider (optional)"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="notes">Additional Notes</label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows="2"
                      placeholder="Any special requests or notes..."
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Book Appointment
                  <ArrowRight className="btn-icon" />
                </button>
              </form>
            </motion.div>

            {/* Appointment Info */}
            <motion.div
              className="appointment-info-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="appointment-info-card">
                <h3>What to Expect</h3>
                <div className="expectation-item">
                  <div className="expectation-number">1</div>
                  <div className="expectation-content">
                    <h4>Arrival & Check-in</h4>
                    <p>Arrive 15 minutes early to complete paperwork and insurance verification</p>
                  </div>
                </div>
                <div className="expectation-item">
                  <div className="expectation-number">2</div>
                  <div className="expectation-content">
                    <h4>Comprehensive Exam</h4>
                    <p>Thorough eye health assessment using advanced diagnostic equipment</p>
                  </div>
                </div>
                <div className="expectation-item">
                  <div className="expectation-number">3</div>
                  <div className="expectation-content">
                    <h4>Discussion & Recommendations</h4>
                    <p>Detailed explanation of findings and personalized treatment recommendations</p>
                  </div>
                </div>
              </div>

              <div className="appointment-reminders">
                <h3>Important Reminders</h3>
                <ul>
                  <li>Bring current glasses/contacts</li>
                  <li>Bring insurance information</li>
                  <li>List of current medications</li>
                  <li>Previous eye exam records</li>
                  <li>Valid photo ID</li>
                </ul>
              </div>

              <div className="appointment-contact">
                <h3>Need Help?</h3>
                <p>If you have any questions or need assistance with booking, please contact us:</p>
                <div className="contact-methods">
                  <div className="contact-method">
                    <Phone className="contact-method-icon" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="contact-method">
                    <Mail className="contact-method-icon" />
                    <span>appointments@eyesightpro.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section appointments-cta-section">
        <div className="container">
          <motion.div
            className="appointments-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="appointments-cta-title">Ready to See Clearly?</h2>
            <p className="appointments-cta-subtitle">
              Don't wait to take care of your vision. Book your appointment today and experience 
              the difference of professional eye care.
            </p>
            <div className="appointments-cta-buttons">
              <button 
                onClick={() => document.getElementById('firstName').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary btn-large"
              >
                Book Now
                <ArrowRight className="btn-icon" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Appointments;
