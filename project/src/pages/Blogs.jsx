import React, { useState } from 'react';
import { User, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { blogs } from '../data/blogs';

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  if (selectedBlog) {
    return (
      <div style={{ minHeight: 'calc(100vh - 80px)', padding: '40px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <button
            onClick={() => setSelectedBlog(null)}
            className="btn btn-secondary btn-small mb-20"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <ArrowLeft size={16} />
            Back to Blogs
          </button>

          <article>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '12px',
                marginBottom: '30px'
              }}
            />

            <h1 style={{ 
              fontSize: '2.5rem', 
              color: 'var(--text-color)', 
              marginBottom: '20px',
              lineHeight: '1.3'
            }}>
              {selectedBlog.title}
            </h1>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '20px', 
              marginBottom: '30px',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <User size={16} color="var(--text-secondary)" />
                <span style={{ color: 'var(--text-secondary)' }}>{selectedBlog.author}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={16} color="var(--text-secondary)" />
                <span style={{ color: 'var(--text-secondary)' }}>
                  {new Date(selectedBlog.date).toLocaleDateString('en-IN', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} color="var(--text-secondary)" />
                <span style={{ color: 'var(--text-secondary)' }}>{selectedBlog.readTime}</span>
              </div>
            </div>

            <div style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: 'var(--text-color)',
              whiteSpace: 'pre-line'
            }}>
              {selectedBlog.content}
            </div>
          </article>

          {/* Related Articles */}
          <div style={{ marginTop: '60px' }}>
            <h3 style={{ color: 'var(--text-color)', marginBottom: '20px' }}>
              More Articles You Might Like
            </h3>
            <div className="grid grid-2">
              {blogs.filter(blog => blog.id !== selectedBlog.id).slice(0, 2).map(blog => (
                <div key={blog.id} className="card" style={{ cursor: 'pointer' }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="card-image"
                  />
                  <h4 className="card-title" style={{ fontSize: '1.1rem' }}>{blog.title}</h4>
                  <p className="card-text">{blog.excerpt}</p>
                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="btn btn-primary btn-small"
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 80px)', padding: '40px 0' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-30">
          <h1 style={{ fontSize: '2.5rem', color: 'var(--text-color)', marginBottom: '15px' }}>
            Coffee Blogs
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Dive into the rich world of coffee culture, café reviews, and brewing tips. 
            Discover stories from coffee enthusiasts and expert insights.
          </p>
        </div>

        {/* Featured Article */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-color)', marginBottom: '25px' }}>
            Featured Article
          </h2>
          <div className="card" style={{ cursor: 'pointer' }} onClick={() => setSelectedBlog(blogs[0])}>
            <div className="grid grid-2" style={{ gap: '30px', alignItems: 'center' }}>
              <div>
                <img
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-color)', marginBottom: '15px' }}>
                  {blogs[0].title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', fontSize: '1rem' }}>
                  {blogs[0].excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    By {blogs[0].author}
                  </span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    {blogs[0].readTime}
                  </span>
                </div>
                <button className="btn btn-primary">
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-color)', marginBottom: '25px' }}>
            All Articles
          </h2>
          <div className="grid grid-3">
            {blogs.map(blog => (
              <div key={blog.id} className="card" style={{ cursor: 'pointer' }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="card-image"
                />
                <h3 className="card-title">{blog.title}</h3>
                <p className="card-text">{blog.excerpt}</p>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px', 
                  marginBottom: '15px',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)'
                }}>
                  <span>{blog.author}</span>
                  <span>{blog.readTime}</span>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                }}>
                  <span style={{ 
                    fontSize: '0.9rem', 
                    color: 'var(--text-secondary)' 
                  }}>
                    {new Date(blog.date).toLocaleDateString('en-IN')}
                  </span>
                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="btn btn-primary btn-small"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coffee Tips Section */}
        <div style={{
          marginTop: '60px',
          padding: '40px',
          backgroundColor: 'var(--card-bg)',
          borderRadius: '12px',
          border: '1px solid var(--border-color)'
        }}>
          <h3 style={{ color: 'var(--text-color)', marginBottom: '20px', textAlign: 'center' }}>
            ☕ Quick Coffee Tips
          </h3>
          <div className="grid grid-2">
            <div>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Perfect Brewing Temperature</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                The ideal water temperature for brewing coffee is between 195°F to 205°F (90°C to 96°C). 
                This ensures optimal extraction without burning the coffee.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Coffee Bean Storage</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Store coffee beans in an airtight container away from light, heat, and moisture. 
                Use within 2-4 weeks of roasting for the best flavor.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Grind Size Matters</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Different brewing methods require different grind sizes. Espresso needs fine grounds, 
                while French press works best with coarse grounds.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Coffee to Water Ratio</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                A general guideline is 1:15 to 1:17 ratio (coffee to water). 
                Adjust according to your taste preference for stronger or milder coffee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;