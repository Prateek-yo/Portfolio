import React from 'react';
import { Heart, Star, MapPin, Phone, Clock } from 'lucide-react';
import { useFavorites } from '../contexts/FavoritesContext';

const CafeCard = ({ cafe, showFavoriteButton = true }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleFavoriteClick = () => {
    if (isFavorite(cafe.id)) {
      removeFromFavorites(cafe.id);
    } else {
      addToFavorites(cafe);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={`star ${i <= rating ? '' : 'empty'}`}
          fill={i <= rating ? '#ffd700' : 'none'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="card">
      <div style={{ position: 'relative' }}>
        <img
          src={cafe.image}
          alt={cafe.name}
          className="card-image"
        />
        {showFavoriteButton && (
          <button
            className={`favorite-btn ${isFavorite(cafe.id) ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            <Heart size={20} fill={isFavorite(cafe.id) ? '#e74c3c' : 'none'} />
          </button>
        )}
      </div>

      <div className="card-title">{cafe.name}</div>
      
      <div className="rating mb-10">
        {renderStars(cafe.rating)}
        <span style={{ marginLeft: '8px', color: 'var(--text-secondary)' }}>
          ({cafe.rating}/5)
        </span>
      </div>

      <div className="card-text">{cafe.description}</div>

      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <MapPin size={16} color="var(--text-secondary)" />
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            {cafe.location}
          </span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Phone size={16} color="var(--text-secondary)" />
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            {cafe.phone}
          </span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Clock size={16} color="var(--text-secondary)" />
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            {cafe.hours}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {cafe.specialties.map((specialty, index) => (
          <span key={index} className="badge" style={{ fontSize: '0.75rem' }}>
            {specialty}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CafeCard;