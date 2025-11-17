import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Sun, Moon, Menu, X, User, LogOut } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Mood Finder', path: '/mood-finder' },
    { name: 'Events & Offers', path: '/events-offers' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <Coffee size={28} />
          <span>Coffee Finder</span>
        </Link>

        <ul className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          
          {user ? (
            <>
              <li>
                <button
                  onClick={handleLogout}
                  className="nav-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <LogOut size={16} style={{ display: 'inline', marginRight: '5px' }} />
                  Logout
                </button>
              </li>
            </>
          ) : null}
          
          <li>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </li>
        </ul>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;