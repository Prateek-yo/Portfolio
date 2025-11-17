import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Toast from '../components/Toast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [toast, setToast] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setToast({ message: 'Please fill in all required fields', type: 'error' });
      return;
    }

    // Simulate form submission
    setToast({ message: 'Message sent successfully! We\'ll get back to you soon.', type: 'success' });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 80px)', padding: '40px 0' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-30">
          <h1 style={{ fontSize: '2.5rem', color: 'var(--text-color)', marginBottom: '15px' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Have questions, suggestions, or want to partner with us? We'd love to hear from you! 
            Get in touch and let's chat over a cup of coffee.
          </p>
        </div>

        <div className="grid grid-2" style={{ gap: '40px' }}>
          {/* Contact Form */}
          <div className="card">
            <h2 style={{ color: 'var(--text-color)', marginBottom: '20px' }}>
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="cafe-submission">Submit a Café</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Feedback</option>
                  <option value="technical">Technical Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Tell us more about your inquiry..."
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={16} style={{ marginRight: '8px' }} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="card mb-20">
              <h3 style={{ color: 'var(--text-color)', marginBottom: '20px' }}>
                Get in Touch
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <Mail size={20} color="var(--primary-color)" />
                  <div>
                    <p style={{ color: 'var(--text-color)', fontWeight: '600', margin: '0' }}>Email</p>
                    <p style={{ color: 'var(--text-secondary)', margin: '0' }}>info@coffeefinder.in</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <Phone size={20} color="var(--primary-color)" />
                  <div>
                    <p style={{ color: 'var(--text-color)', fontWeight: '600', margin: '0' }}>Phone</p>
                    <p style={{ color: 'var(--text-secondary)', margin: '0' }}>+91 98765 43210</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <MapPin size={20} color="var(--primary-color)" style={{ marginTop: '2px' }} />
                  <div>
                    <p style={{ color: 'var(--text-color)', fontWeight: '600', margin: '0' }}>Address</p>
                    <p style={{ color: 'var(--text-secondary)', margin: '0' }}>
                      Coffee Finder HQ<br />
                      123 Coffee Street<br />
                      Bangalore, Karnataka 560001<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-20">
              <h3 style={{ color: 'var(--text-color)', marginBottom: '15px' }}>
                Business Hours
              </h3>
              <div style={{ color: 'var(--text-secondary)' }}>
                <p style={{ margin: '8px 0' }}><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p style={{ margin: '8px 0' }}><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                <p style={{ margin: '8px 0' }}><strong>Sunday:</strong> Closed</p>
              </div>
            </div>

            <div className="card">
              <h3 style={{ color: 'var(--text-color)', marginBottom: '15px' }}>
                Follow Us
              </h3>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a 
                  href="#" 
                  style={{ 
                    color: 'var(--primary-color)', 
                    textDecoration: 'none',
                    padding: '10px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--hover-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  style={{ 
                    color: 'var(--primary-color)', 
                    textDecoration: 'none',
                    padding: '10px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--hover-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="#" 
                  style={{ 
                    color: 'var(--primary-color)', 
                    textDecoration: 'none',
                    padding: '10px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--hover-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  style={{ 
                    color: 'var(--primary-color)', 
                    textDecoration: 'none',
                    padding: '10px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--hover-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: '60px' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-color)', marginBottom: '25px', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>
                How can I add my café to Coffee Finder?
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Simply fill out the contact form above and select "Submit a Café" as your subject. 
                We'll review your submission and get back to you within 2-3 business days.
              </p>
            </div>
            
            <div className="card">
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>
                Is Coffee Finder available in other cities?
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Currently, we're focused on major Indian cities. We're constantly expanding our coverage. 
                Contact us if you'd like to see Coffee Finder in your city!
              </p>
            </div>
            
            <div className="card">
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>
                How do you verify café information?
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Our team personally visits and verifies each café's information including hours, 
                contact details, and menu items to ensure accuracy for our users.
              </p>
            </div>
            
            <div className="card">
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>
                Can I advertise my café on your platform?
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Yes! We offer various advertising and partnership opportunities. 
                Please contact us with "Partnership Opportunity" as your subject for more details.
              </p>
            </div>
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

export default ContactUs;