import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CafeCard from '../components/CafeCard';
import { cafes, moodCategories } from '../data/cafes';

const MoodFinder = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const cafesPerPage = 6;

  // Filter cafes based on mood and search term
  const filteredCafes = cafes.filter(cafe => {
    const matchesMood = !selectedMood || cafe.mood.includes(selectedMood);
    const matchesSearch = !searchTerm || 
      cafe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cafe.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cafe.specialties.some(specialty => 
        specialty.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesMood && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredCafes.length / cafesPerPage);
  const startIndex = (currentPage - 1) * cafesPerPage;
  const currentCafes = filteredCafes.slice(startIndex, startIndex + cafesPerPage);

  const handleMoodSelect = (moodId) => {
    setSelectedMood(selectedMood === moodId ? '' : moodId);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 80px)', padding: '40px 0' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-30">
          <h1 style={{ fontSize: '2.5rem', color: 'var(--text-color)', marginBottom: '15px' }}>
            Find Cafes by Mood
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Whether you're looking to study, chill, have a romantic date, or hang out with friends, 
            we'll help you find the perfect café atmosphere.
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-container mb-30" style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
          <input
            type="text"
            placeholder="Search cafes by name, location, or specialty..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="search-input"
          />
          <Search className="search-icon" size={20} />
        </div>

        {/* Mood Selection */}
        <div className="mb-30">
          <h2 className="text-center mb-20" style={{ fontSize: '1.5rem', color: 'var(--text-color)' }}>
            Choose Your Mood
          </h2>
          <div className="mood-grid">
            {moodCategories.map(mood => (
              <div
                key={mood.id}
                className={`mood-card ${selectedMood === mood.id ? 'active' : ''}`}
                onClick={() => handleMoodSelect(mood.id)}
              >
                <div className="mood-icon">{mood.icon}</div>
                <div className="mood-title">{mood.name}</div>
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: 'var(--text-secondary)', 
                  marginTop: '8px',
                  textAlign: 'center'
                }}>
                  {mood.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex-between mb-20">
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-color)' }}>
            {selectedMood 
              ? `${moodCategories.find(m => m.id === selectedMood)?.name} Cafes` 
              : 'All Cafes'
            }
            <span style={{ 
              fontSize: '1rem', 
              color: 'var(--text-secondary)', 
              fontWeight: 'normal',
              marginLeft: '10px'
            }}>
              ({filteredCafes.length} found)
            </span>
          </h2>
          
          {selectedMood && (
            <button
              onClick={() => {
                setSelectedMood('');
                setCurrentPage(1);
              }}
              className="btn btn-secondary btn-small"
            >
              Clear Filter
            </button>
          )}
        </div>

        {/* Cafe Grid */}
        {currentCafes.length > 0 ? (
          <>
            <div className="grid grid-3 mb-30">
              {currentCafes.map(cafe => (
                <CafeCard key={cafe.id} cafe={cafe} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={currentPage === page ? 'active' : ''}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center" style={{ padding: '60px 0' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              {searchTerm || selectedMood 
                ? 'No cafes found matching your criteria.' 
                : 'Loading cafes...'
              }
            </p>
            {(searchTerm || selectedMood) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedMood('');
                  setCurrentPage(1);
                }}
                className="btn btn-primary"
              >
                Show All Cafes
              </button>
            )}
          </div>
        )}

        {/* Tips Section */}
        <div style={{
          marginTop: '60px',
          padding: '30px',
          backgroundColor: 'var(--card-bg)',
          borderRadius: '12px',
          border: '1px solid var(--border-color)'
        }}>
          <h3 style={{ color: 'var(--text-color)', marginBottom: '20px', textAlign: 'center' }}>
            💡 Pro Tips for Choosing the Right Café
          </h3>
          <div className="grid grid-2">
            <div>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>For Studying:</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Look for cafes with good Wi-Fi, comfortable seating, and moderate noise levels. 
                Avoid peak hours for better concentration.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>For Dates:</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Choose places with cozy ambiance, dim lighting, and quiet corners. 
                Evening hours work best for romantic settings.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>For Friends:</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Opt for lively places with group seating, games, and a vibrant atmosphere. 
                Weekend evenings are perfect for hangouts.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>For Chilling:</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Find spots with comfortable loungers, outdoor seating, and relaxing music. 
                Afternoon hours offer the best chill vibes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodFinder;