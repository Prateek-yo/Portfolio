import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Toast from '../components/Toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [toast, setToast] = useState(null);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      setToast({ message: 'Please enter both username and password', type: 'error' });
      return;
    }
    
    // For demo purposes, any username/password combo works
    login({
      name: formData.username,
      email: `${formData.username}@example.com`
    });
    
    setToast({ message: 'Logged in successfully!', type: 'success' });
    
    setTimeout(() => {
      navigate('/home');
    }, 1500);
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f7f3f0 0%, #e8ddd4 25%, #d4c4b0 50%, #c4a484 75%, #b8956b 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      position: 'relative'
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(139, 69, 19, 0.05) 2px, transparent 2px),
                         radial-gradient(circle at 80% 40%, rgba(160, 82, 45, 0.05) 1px, transparent 1px)`,
        backgroundSize: '100px 100px, 150px 150px',
        opacity: 0.6
      }} />
      
      <div style={{ 
        maxWidth: '450px', 
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '50px 40px',
        borderRadius: '20px',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(139, 69, 19, 0.1)',
        boxShadow: '0 20px 40px rgba(139, 69, 19, 0.2)',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Back Button */}
        <Link 
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#8b4513',
            textDecoration: 'none',
            marginBottom: '30px',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.color = '#a0522d'}
          onMouseOut={(e) => e.target.style.color = '#8b4513'}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ 
            color: '#8b4513', 
            fontSize: '2.2rem',
            fontWeight: 'bold',
            margin: '0 0 15px 0'
          }}>
            Welcome Back
          </h1>
          <p style={{ 
            color: '#8b6f47',
            fontSize: '1rem',
            lineHeight: '1.5',
            margin: '0'
          }}>
            Sign in to continue your coffee journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#8b4513',
              fontSize: '0.95rem'
            }}>
              <User size={16} />
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '12px',
                border: '2px solid #d4c4b0',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                backgroundColor: '#ffffff',
                color: '#333333',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#8b4513';
                e.target.style.backgroundColor = '#ffffff';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d4c4b0';
                e.target.style.backgroundColor = '#ffffff';
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#8b4513',
              fontSize: '0.95rem'
            }}>
              <Lock size={16} />
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                style={{
                  width: '100%',
                  padding: '15px 50px 15px 15px',
                  borderRadius: '12px',
                  border: '2px solid #d4c4b0',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#ffffff',
                  color: '#333333',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#8b4513';
                  e.target.style.backgroundColor = '#ffffff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d4c4b0';
                  e.target.style.backgroundColor = '#ffffff';
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#8b6f47',
                  padding: '5px'
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: '#8b4513',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginBottom: '25px',
              boxShadow: '0 4px 15px rgba(139, 69, 19, 0.3)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#a0522d';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(139, 69, 19, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#8b4513';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(139, 69, 19, 0.3)';
            }}
          >
            Sign In
          </button>
        </form>

        {/* Demo Note */}
        <div style={{
          padding: '20px',
          backgroundColor: 'rgba(139, 69, 19, 0.1)',
          borderRadius: '12px',
          border: '1px solid rgba(139, 69, 19, 0.2)',
          textAlign: 'center'
        }}>
          <p style={{ 
            fontSize: '0.9rem', 
            color: '#8b4513', 
            margin: '0',
            fontWeight: '500'
          }}>
            <strong>Demo Mode:</strong> Use any username and password to sign in!
          </p>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default Login;