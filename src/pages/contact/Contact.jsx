import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const center = {
  lat: -1.2921, // Replace with actual school coordinates
  lng: 36.8219  // Replace with actual school coordinates
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1>Contact Us</h1>
            <p>Get in touch with Capuchin Boys Secondary School</p>
          </div>
        </div>
      </section>


      {/* Main Content */}
      <div className="container">
        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Our Information</h2>
            <p>Feel free to reach out to us for any inquiries or visit our school during working hours.</p>
            
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>P.O. Box 154, Pangani, Tanga</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+255 752 978 895</p>
                <p>+255 687 901 972</p>
                <p>+255 678 864 722</p>
                <p>+255 657 454 241</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p> capuchinboysss2015@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaClock />
              </div>
              <div>
                <h4>Working Hours</h4>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>


          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* About Section */}
        <section className="about-section">
          <div className="about-content">
            <h2>About Capuchin Boys Secondary School</h2>
            <p>
              Capuchin Boys Secondary School is a premier educational institution dedicated to academic excellence,
              character formation, and holistic development of young men. Our mission is to nurture responsible,
              disciplined, and morally upright individuals who will make positive contributions to society.
            </p>
            <p>
              With state-of-the-art facilities, experienced faculty, and a supportive learning environment,
              we provide quality education that prepares our students for future challenges and opportunities.
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <h2>Our Location</h2>
          <div className="map-container">
              <div style={containerStyle}>
                <iframe
                  title="Capuchin Boys Secondary School Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4000!2d38.91622995766773!3d-5.317628422855164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1719840000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;