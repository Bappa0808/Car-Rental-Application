import React, { useState } from 'react';
import "../style/Contact.css"

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to server or show confirmation message)
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Have an Issue or Concern? Reach Out to Us!</h1>
        <p>If you're facing any issues, need assistance, or have suggestions, feel free to contact us.</p>
      </header>

      <section className="contact-form-section">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message"
            />
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      <section className="contact-info-section">
        <h2>Other Ways to Reach Us</h2>
        <p>If you'd prefer to reach us via other channels, feel free to use the following:</p>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email Us</h3>
            <p>support@carrental.com</p>
          </div>
          <div className="contact-item">
            <h3>Call Us</h3>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
