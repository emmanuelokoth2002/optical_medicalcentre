import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, ArrowRight } from 'lucide-react';
import { tryAdminLogin } from '../utils/adminAuth';
import SEO from '../components/SEO';
import './AdminLogin.css';

const AdminLogin = () => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tryAdminLogin(passcode.trim())) {
      navigate('/products');
    } else {
      setError('Incorrect passcode.');
    }
  };

  return (
    <div className="admin-login-page">
      <SEO
        title="Admin Login | Eye Sight Optical and Medical Center Ltd"
        description="Staff admin login for Eye Sight Optical and Medical Center Ltd."
        path="/admin"
        noindex
      />
      <div className="container">
        <motion.form
          className="admin-login-card card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="admin-login-icon">
            <Lock />
          </div>
          <h1 className="admin-login-title">Staff Login</h1>
          <p className="admin-login-subtitle">Enter the admin passcode to manage products.</p>

          <input
            type="password"
            className="admin-login-input"
            placeholder="Passcode"
            value={passcode}
            onChange={(e) => { setPasscode(e.target.value); setError(''); }}
            autoFocus
          />

          {error && <p className="admin-login-error">{error}</p>}

          <button type="submit" className="btn btn-primary admin-login-btn">
            Log In
            <ArrowRight className="btn-icon" />
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default AdminLogin;
