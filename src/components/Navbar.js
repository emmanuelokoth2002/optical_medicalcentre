import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Eye, Phone, Volume2, VolumeX, ChevronRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [audioAssistEnabled, setAudioAssistEnabled] = useState(() => {
    try {
      const saved = localStorage.getItem('audioAssistEnabled');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });
  const location = useLocation();
  const synthRef = useRef(typeof window !== 'undefined' ? window.speechSynthesis : null);
  const voiceRef = useRef(null);
  const lastSpokenRef = useRef('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('audioAssistEnabled', JSON.stringify(audioAssistEnabled));
    } catch {}
  }, [audioAssistEnabled]);

  // Load voices when available
  useEffect(() => {
    const synth = synthRef.current;
    if (!synth) return;

    function setDefaultVoice() {
      const voices = synth.getVoices();
      if (voices && voices.length) {
        const preferred = voices.find(v => /en-GB|en-US/i.test(v.lang)) || voices[0];
        voiceRef.current = preferred || null;
      }
    }

    setDefaultVoice();
    if (typeof synth.onvoiceschanged !== 'undefined') {
      synth.addEventListener('voiceschanged', setDefaultVoice);
      return () => synth.removeEventListener('voiceschanged', setDefaultVoice);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (synthRef.current && synthRef.current.speaking) synthRef.current.cancel();
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  const speak = (text) => {
    if (!audioAssistEnabled) return;
    if (!text || typeof window === 'undefined' || !synthRef.current) return;
    const synth = synthRef.current;
    const trimmed = String(text).trim();
    if (trimmed === lastSpokenRef.current && synth.speaking) return;
    lastSpokenRef.current = trimmed;
    try {
      if (synth.speaking) synth.cancel();
      const utter = new SpeechSynthesisUtterance(trimmed);
      utter.rate = 1.0;
      utter.pitch = 1.0;
      utter.volume = 1.0;
      if (voiceRef.current) utter.voice = voiceRef.current;
      utter.lang = voiceRef.current?.lang || 'en-US';
      synth.speak(utter);
    } catch {}
  };

  const stopSpeaking = () => {
    if (!synthRef.current) return;
    try {
      if (synthRef.current.speaking) synthRef.current.cancel();
    } catch {}
  };

  const onNavHover = (label) => () => speak(label);
  const onNavFocus = (label) => () => speak(label);
  const onNavLeave = () => stopSpeaking();

  const toggleAudioAssist = () => {
    const next = !audioAssistEnabled;
    setAudioAssistEnabled(next);
    if (!next) {
      stopSpeaking();
    } else {
      speak('Audio Assist enabled. Hover links to hear them.');
    }
  };

  // Announce route changes
  useEffect(() => {
    if (!audioAssistEnabled) return;
    const path = location.pathname;
    const label = path === '/' ? 'Home' : path.replace('/', '').replace('-', ' ');
    speak(`Page: ${label}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <Eye className="brand-icon" />
          <div className="brand-text">
            <span>EYE SIGHT OPTICAL</span>
            <span>& MEDICAL CENTER LTD</span>
          </div>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
            onMouseEnter={onNavHover('Home')}
            onFocus={onNavFocus('Home')}
            onMouseLeave={onNavLeave}
            onBlur={onNavLeave}
          >
            Home
            <ChevronRight className="mobile-arrow" />
          </Link>
          <Link 
            to="/services" 
            className={`nav-link ${isActive('/services') ? 'active' : ''}`}
            onClick={closeMenu}
            onMouseEnter={onNavHover('Services')}
            onFocus={onNavFocus('Services')}
            onMouseLeave={onNavLeave}
            onBlur={onNavLeave}
          >
            Services
            <ChevronRight className="mobile-arrow" />
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
            onMouseEnter={onNavHover('About')}
            onFocus={onNavFocus('About')}
            onMouseLeave={onNavLeave}
            onBlur={onNavLeave}
          >
            About
            <ChevronRight className="mobile-arrow" />
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
            onMouseEnter={onNavHover('Contact')}
            onFocus={onNavFocus('Contact')}
            onMouseLeave={onNavLeave}
            onBlur={onNavLeave}
          >
            Contact
            <ChevronRight className="mobile-arrow" />
          </Link>
          <div className="mobile-actions">
            <Link to="/appointments" className="nav-link btn btn-primary" onClick={closeMenu}>Book Appointment</Link>
            <button
              type="button"
              className="nav-link audio-assist-toggle"
              onClick={toggleAudioAssist}
              aria-pressed={audioAssistEnabled}
            >
              {audioAssistEnabled ? <Volume2 className="phone-icon" /> : <VolumeX className="phone-icon" />}
              <span style={{ marginLeft: 8 }}>{audioAssistEnabled ? 'Audio On' : 'Audio Off'}</span>
            </button>
            <div className="mobile-contact">
              <Phone className="phone-icon" />
              <span className="phone-number">+254 727864012</span>
            </div>
          </div>
        </div>

        <div className="navbar-contact">
          <Link 
            to="/appointments" 
            className="nav-link btn btn-primary"
            onClick={closeMenu}
            onMouseEnter={onNavHover('Book Appointment')}
            onFocus={onNavFocus('Book Appointment')}
            onMouseLeave={onNavLeave}
            onBlur={onNavLeave}
          >
            Book Appointment
          </Link>
          <button
            type="button"
            className="nav-link audio-assist-toggle"
            onClick={toggleAudioAssist}
            aria-pressed={audioAssistEnabled}
            aria-label={audioAssistEnabled ? 'Disable Audio Assist' : 'Enable Audio Assist'}
            title={audioAssistEnabled ? 'Disable Audio Assist' : 'Enable Audio Assist'}
          >
            {audioAssistEnabled ? <Volume2 className="phone-icon" /> : <VolumeX className="phone-icon" />}
            <span style={{ marginLeft: 8 }}>{audioAssistEnabled ? 'Audio On' : 'Audio Off'}</span>
          </button>
          <Phone className="phone-icon" />
          <span className="phone-number">+254 727864012</span>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`navbar-backdrop ${isOpen ? 'active' : ''}`} onClick={closeMenu} />
    </nav>
  );
};

export default Navbar;
