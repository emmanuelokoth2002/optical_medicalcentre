import React from 'react';
import { Eye } from 'lucide-react';
import './Logo.css';

const Logo = ({ 
  size = 'medium', 
  showText = true, 
  className = '',
  onClick = null 
}) => {
  const logoPath = process.env.PUBLIC_URL + '/images/logo/eye-sight-logo-icon.png';
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      className={`logo ${size} ${className}`}
      onClick={handleClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className="logo-image">
        {/* Try to load the actual logo, fallback to Eye icon */}
        <img 
          src={logoPath} 
          alt="Eye Sight Optical and Medical Center Logo"
          className="logo-img"
          onError={(e) => {
            // If image fails to load, hide it and show the Eye icon
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <Eye className="logo-icon" style={{ display: 'none' }} />
      </div>
      {showText && (
        <div className="logo-text">
          <span className="logo-primary">EYE SIGHT OPTICAL</span>
          <span className="logo-secondary">& MEDICAL CENTER LTD</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
