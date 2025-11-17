import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Tag, Users } from 'lucide-react';
import { events, offers } from '../data/events';
import Toast from '../components/Toast';

const EventsOffers = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [toast, setToast] = useState(null);

  const handleRSVP = (eventTitle) => {
    setToast({ message: `RSVP confirmed for "${eventTitle}"!`, type: 'success' });
  };

  const handleBookOffer = (offerTitle) => {
    setToast({ message: `Offer "${offerTitle}" has been saved to your profile!`, type: 'success' });
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 80px)', padding: '40px 0' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-30">
          <h1 style={{ fontSize: '2.5rem', color: 'var(--text-color)', marginBottom: '15px' }}>
            Events & Offers
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Discover exciting events happening at your favorite cafes and grab amazing offers 
            to make your coffee experience even better.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '40px',
          borderBottom: '1px solid var(--border-color)'
        }}>
          <button
            onClick={() => setActiveTab('events')}
            style={{
              padding: '15px 30px',
              border: 'none',
              background: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: activeTab === 'events' ? 'var(--primary-color)' : 'var(--text-secondary)',
              borderBottom: activeTab === 'events' ? '3px solid var(--primary-color)' : '3px solid transparent',
              cursor: 'pointer'
            }}
          >
            🎉 Events
          </button>
          <button
            onClick={() => setActiveTab('offers')}
            style={{
              padding: '15px 30px',
              border: 'none',
              background: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: activeTab === 'offers' ? 'var(--primary-color)' : 'var(--text-secondary)',
              borderBottom: activeTab === 'offers' ? '3px solid var(--primary-color)' : '3px solid transparent',
              cursor: 'pointer'
            }}
          >
            🏷️ Offers
          </button>
        </div>

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-color)', marginBottom: '25px' }}>
              Upcoming Events
            </h2>
            <div className="grid grid-2">
              {events.map(event => (
                <div key={event.id} className="card">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="card-image"
                  />
                  <h3 className="card-title">{event.title}</h3>
                  
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Calendar size={16} color="var(--text-secondary)" />
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        {new Date(event.date).toLocaleDateString('en-IN', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Clock size={16} color="var(--text-secondary)" />
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        {event.time}
                      </span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <MapPin size={16} color="var(--text-secondary)" />
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        {event.location}
                      </span>
                    </div>
                  </div>

                  <p className="card-text">{event.description}</p>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
                    {event.tags.map((tag, index) => (
                      <span key={index} className="badge" style={{ fontSize: '0.75rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: '600', 
                      color: 'var(--primary-color)' 
                    }}>
                      {event.price}
                    </span>
                    <button
                      onClick={() => handleRSVP(event.title)}
                      className="btn btn-primary btn-small"
                    >
                      <Users size={16} style={{ marginRight: '5px' }} />
                      RSVP
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Offers Tab */}
        {activeTab === 'offers' && (
          <div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-color)', marginBottom: '25px' }}>
              Current Offers
            </h2>
            <div className="grid grid-2">
              {offers.map(offer => (
                <div key={offer.id} className="card">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="card-image"
                  />
                  
                  <div style={{ 
                    position: 'relative',
                    backgroundColor: 'var(--accent-color)',
                    color: 'white',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    marginBottom: '15px'
                  }}>
                    <Tag size={14} style={{ marginRight: '5px' }} />
                    {offer.discount} OFF
                  </div>
                  
                  <h3 className="card-title">{offer.title}</h3>
                  <p className="card-text">{offer.description}</p>

                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <MapPin size={16} color="var(--text-secondary)" />
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        {offer.location}
                      </span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={16} color="var(--text-secondary)" />
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        Valid until: {new Date(offer.validUntil).toLocaleDateString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
                    {offer.tags.map((tag, index) => (
                      <span key={index} className="badge" style={{ fontSize: '0.75rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleBookOffer(offer.title)}
                    className="btn btn-secondary"
                    style={{ width: '100%' }}
                  >
                    Save Offer
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div style={{
          marginTop: '60px',
          padding: '40px',
          backgroundColor: 'var(--card-bg)',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'var(--text-color)', marginBottom: '15px' }}>
            Stay Updated!
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
            Subscribe to get notified about the latest events and exclusive offers from your favorite cafes.
          </p>
          <div style={{ display: 'flex', gap: '10px', maxWidth: '400px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-input"
              style={{ flex: '1' }}
            />
            <button 
              className="btn btn-primary"
              onClick={() => setToast({ message: 'Thanks for subscribing!', type: 'success' })}
            >
              Subscribe
            </button>
          </div>
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

export default EventsOffers;