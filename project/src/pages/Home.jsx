import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Coffee, Heart, Users, BookOpen } from 'lucide-react';
import CafeCard from '../components/CafeCard';
import { cafes } from '../data/cafes';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [featuredCafes, setFeaturedCafes] = useState([]);

  useEffect(() => {
    // Get random featured cafes
    const shuffled = [...cafes].sort(() => 0.5 - Math.random());
    setFeaturedCafes(shuffled.slice(0, 3));
  }, []);

  const filteredCafes = cafes.filter(cafe =>
    cafe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cafe.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cafe.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Discover Amazing Cafes</h1>
          <p className="hero-subtitle">
            Find the perfect coffee spot for every mood and occasion across India
          </p>
          <div className="search-container" style={{ maxWidth: '500px', margin: '0 auto' }}>
            <input
              type="text"
              placeholder="Search cafes, locations, or specialties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <Search className="search-icon" size={20} />
          </div>
          
          {/* Get Started CTA */}
        </div>
      </section>

      {/* Quick Actions */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <h2 className="text-center mb-30" style={{ fontSize: '2rem', color: 'var(--text-color)' }}>
            What are you in the mood for?
          </h2>
          <div className="grid grid-4">
            <Link to="/mood-finder" className="card text-center" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Coffee size={48} color="var(--primary-color)" style={{ marginBottom: '16px' }} />
              <h3 className="card-title">Find by Mood</h3>
              <p className="card-text">Discover cafes perfect for your current vibe</p>
            </Link>
            
            <Link to="/events-offers" className="card text-center" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Heart size={48} color="var(--primary-color)" style={{ marginBottom: '16px' }} />
              <h3 className="card-title">Events & Offers</h3>
              <p className="card-text">Check out the latest deals and happenings</p>
            </Link>
            
            <Link to="/blogs" className="card text-center" style={{ textDecoration: 'none', color: 'inherit' }}>
              <BookOpen size={48} color="var(--primary-color)" style={{ marginBottom: '16px' }} />
              <h3 className="card-title">Coffee Blogs</h3>
              <p className="card-text">Read about coffee culture and café reviews</p>
            </Link>
            
            <Link to="/contact" className="card text-center" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Users size={48} color="var(--primary-color)" style={{ marginBottom: '16px' }} />
              <h3 className="card-title">Connect</h3>
              <p className="card-text">Get in touch with fellow coffee enthusiasts</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Search Results or Featured Cafes */}
      <section style={{ padding: '0 0 60px 0' }}>
        <div className="container">
          <h2 className="mb-30" style={{ fontSize: '2rem', color: 'var(--text-color)' }}>
            {searchTerm ? `Search Results (${filteredCafes.length})` : 'Featured Cafes'}
          </h2>
          
          {(searchTerm ? filteredCafes : featuredCafes).length > 0 ? (
            <div className="grid grid-3">
              {(searchTerm ? filteredCafes : featuredCafes).map(cafe => (
                <CafeCard key={cafe.id} cafe={cafe} />
              ))}
            </div>
          ) : (
            <div className="text-center" style={{ padding: '40px 0' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                {searchTerm ? 'No cafes found matching your search.' : 'Loading featured cafes...'}
              </p>
            </div>
          )}
          
          {searchTerm && filteredCafes.length > 6 && (
            <div className="text-center mt-30">
              <Link to="/mood-finder" className="btn btn-primary">
                View All Cafes
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', 
        color: 'white', 
        padding: '60px 0' 
      }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
            Join the Coffee Community
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: '0.9' }}>
            Create your profile to save favorites, write reviews, and connect with fellow coffee lovers
          </p>
          <Link to="/get-started" className="btn" style={{ 
            backgroundColor: 'white', 
            color: 'var(--primary-color)',
            fontWeight: 'bold',
            padding: '15px 30px',
            fontSize: '1.1rem'
          }}>
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;