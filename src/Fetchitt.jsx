import React, { useState } from 'react';
import Logo from './assets/logo.png';

const FetchittLanding = () => {
  // 1. UI State
  const [activeTab, setActiveTab] = useState('sender'); // Acts as 'role'
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // 2. Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  // 3. Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 4. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop page reload
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Get the backend URL from .env (Ensure this variable exists in your .env file)
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      
      const response = await fetch(`${baseUrl}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          role: activeTab // 'sender' or 'fetcher'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success!
        setStatus({ type: 'success', message: data.message || 'Welcome to Fetchitt!' });
        setFormData({ fullName: '', email: '', password: '' }); // Clear form
      } else {
        // Error from backend (e.g., "Email already exists")
        setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      // Network error
      setStatus({ type: 'error', message: 'Failed to connect to the server.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landing-page">
      
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <a href="/" className="logo">
            <div className="logo-icon">
              <img src={Logo} alt="Fetchitt Logo" />
            </div>
            <span>Fetchitt<span style={{ color: 'var(--primary)' }}>.</span></span>
          </a>

          <nav className="nav-links">
            <a href="#how-it-works">How it Works</a>
            <a href="#for-fetchers">For Fetchers</a>
          </nav>
          
          <button className="mobile-menu-btn" style={{display: 'none'}}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        
        <div className="container hero-grid">
          {/* Hero Content */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>bolt</span>
              Instant Local Delivery
            </div>
            <h1>
              Your Stuff, Delivered by Someone <span className="highlight">Nearby.
                <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8" />
                </svg>
              </span>
            </h1>
            <p className="hero-desc">
              Forgot keys? Need to send a document across town? Fetchitt connects you with local people ready to help instantly.
            </p>
          </div>

          {/* Registration Card */}
          <div className="reg-card">
            <div className="card-tabs">
              <button 
                type="button"
                className={`tab ${activeTab === 'sender' ? 'active' : ''}`}
                onClick={() => setActiveTab('sender')}
              >
                <span>Sender</span>
                I want to SEND
              </button>
              <button 
                type="button"
                className={`tab ${activeTab === 'fetcher' ? 'active' : ''}`}
                onClick={() => setActiveTab('fetcher')}
              >
                <span>Fetcher</span>
                I want to FETCH
              </button>
            </div>

            {/* Form Start */}
            <form className="card-form" onSubmit={handleSubmit}>
              <h3>Let's get moving.</h3>
              
              {/* Status Message Display */}
              {status.message && (
                <div style={{ 
                  padding: '10px', 
                  borderRadius: '8px', 
                  fontSize: '0.9rem',
                  backgroundColor: status.type === 'success' ? '#dcfce7' : '#fee2e2',
                  color: status.type === 'success' ? '#166534' : '#991b1b',
                  textAlign: 'center'
                }}>
                  {status.message}
                </div>
              )}

              <div className="input-group">
                <label>Full Name</label>
                <div className="input-wrapper">
                  <span className="material-symbols-outlined">person</span>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Jane Doe" 
                    required 
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <span className="material-symbols-outlined">mail</span>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com" 
                    required 
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Password</label>
                <div className="input-wrapper">
                  <span className="material-symbols-outlined">lock</span>
                  <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••" 
                    required 
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="btn-primary btn-full"
                disabled={loading}
                style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Creating Account...' : 'Get Started with Fetchitt'}
                {!loading && <span className="material-symbols-outlined">arrow_forward</span>}
              </button>
              
              <p style={{ fontSize: '0.75rem', color: '#6b7280', textAlign: 'center' }}>
                By signing up, you agree to our Terms & Privacy Policy.
              </p>
            </form>
            {/* Form End */}
            
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section style={{ borderTop: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6', padding: '1.5rem 0', background: 'white' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--navy)' }}>
          <span className="material-symbols-outlined" style={{ color: '#22c55e' }}>verified_user</span>
          <span>Secure Payments & Verified Fetchers</span>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="features">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.25rem', color: 'var(--navy)', marginBottom: '1rem' }}>Simple as 1, 2, 3</h2>
            <p style={{ color: 'var(--text-muted)' }}>Whether you're sending keys or a care package, the process is seamless.</p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="icon-box square">
                <span className="material-symbols-outlined" style={{ fontSize: '40px', transform: 'rotate(-3deg)' }}>edit_document</span>
              </div>
              <h3>1. Request</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Enter details about what you need fetched or sent and set your price.</p>
            </div>

            <div className="feature-item">
              <div className="icon-box circle">
                <span className="material-symbols-outlined" style={{ fontSize: '40px' }}>handshake</span>
              </div>
              <h3>2. Connect</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Instant match with a nearby verified Fetcher ready to head your way.</p>
            </div>

            <div className="feature-item">
              <div className="icon-box square-rev">
                <span className="material-symbols-outlined" style={{ fontSize: '40px', transform: 'rotate(3deg)' }}>check_circle</span>
              </div>
              <h3>3. Deliver</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Track in real-time. Your item arrives safely and payment is released.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="split-section">
        <div className="container">
          <div className="split-card">
            {/* Sender Side */}
            <div className="split-half bg-navy">
              <div style={{ background: 'rgba(255,255,255,0.1)', width: 'fit-content', padding: '10px', borderRadius: '12px', marginBottom: '1.5rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>inventory_2</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>For Senders</h2>
              <ul className="check-list">
                <li><span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>check_circle</span> Save hours of travel time</li>
                <li><span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>check_circle</span> Real-time GPS tracking</li>
                <li><span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>check_circle</span> Items delievered in minutes</li>
              </ul>
            </div>
            
            {/* Fetcher Side */}
            <div className="split-half bg-primary">
              <div style={{ background: 'rgba(255,255,255,0.2)', width: 'fit-content', padding: '10px', borderRadius: '12px', marginBottom: '1.5rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>directions_bike</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>For Fetchers</h2>
              <ul className="check-list">
                <li><span className="material-symbols-outlined" style={{ color: 'var(--navy)' }}>check_circle</span> Earn extra cash on your schedule</li>
                <li><span className="material-symbols-outlined" style={{ color: 'var(--navy)' }}>check_circle</span> Keep 100% of your tips</li>
                <li><span className="material-symbols-outlined" style={{ color: 'var(--navy)' }}>check_circle</span> Explore your city while earning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="logo" style={{ color: 'white', marginBottom: '1.5rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>package_2</span>
                Fetchitt.
              </div>
              <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>Connecting communities through instant, secure, peer-to-peer delivery.</p>
            </div>
            
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4>Product</h4>
              <ul>
                <li><a href="#">How it Works</a></li>
                <li><a href="#">Trust & Safety</a></li>
                <li><a href="#">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', fontSize: '0.875rem', color: '#6b7280' }}>
            © 2023 Fetchitt Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FetchittLanding;