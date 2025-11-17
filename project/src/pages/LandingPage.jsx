import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundImage: 'url(/image.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      {/* Dark overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
      }} />
      
      {/* Main Content */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2,
        textAlign: 'center',
        padding: '40px'
      }}>
        {/* App Name */}
        <h1 style={{ 
          fontSize: '4.5rem', 
          fontWeight: 'bold', 
          margin: '0 0 60px 0',
          color: 'white',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
          letterSpacing: '2px',
          lineHeight: '1.2'
        }}>
          Coffee Finder
        </h1>

        {/* Get Started Button */}
        <button 
          onClick={handleGetStarted}
          style={{
            backgroundColor: '#8b4513',
            color: 'white',
            border: 'none',
            padding: '18px 45px',
            fontSize: '1.2rem',
            fontWeight: '600',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#a0522d';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#8b4513';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;