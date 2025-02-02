import React from 'react';
import '../style/Community.css';

function Community() {
  return (
    <div className="community-container">
      <header className="community-header">
        <h1>Join Our Community</h1>
        <p>Engage with fellow car lovers, share experiences, and get the latest news and updates!</p>
      </header>

      {/* Discussion Forum */}
      <section className="forum-section">
        <h2>Forum Discussions</h2>
        <div className="forum-posts">
          <div className="forum-post">
            <h3>Best Cars for Long Road Trips</h3>
            <p>Which car do you think is the best for long trips? Share your experiences!</p>
            <button className="view-post-button">View Post</button>
          </div>
          <div className="forum-post">
            <h3>Maintenance Tips for New Cars</h3>
            <p>Looking for maintenance tips for new cars. Any suggestions?</p>
            <button className="view-post-button">View Post</button>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="reviews-section">
        <h2>User Reviews</h2>
        <div className="review-card">
          <h3>Amazing Experience with BMW X5</h3>
          <p>"I rented the BMW X5 for a week, and it was an amazing experience! Highly recommend!"</p>
          <button className="read-review-button">Read Full Review</button>
        </div>
        <div className="review-card">
          <h3>Great Value for Money</h3>
          <p>"The pricing was very reasonable, and the service was top-notch. Will rent again!"</p>
          <button className="read-review-button">Read Full Review</button>
        </div>
      </section>

      {/* Events and Meetups */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="event-card">
          <h3>Car Enthusiasts Meetup - Jan 2025</h3>
          <p>Join us for a meetup with car enthusiasts at the downtown park. RSVP now!</p>
          <button className="rsvp-button">RSVP</button>
        </div>
        <div className="event-card">
          <h3>Car Maintenance Workshop - Feb 2025</h3>
          <p>Learn about car maintenance in this hands-on workshop! Limited slots available.</p>
          <button className="rsvp-button">RSVP</button>
        </div>
      </section>

      {/* Announcements */}
      <section className="announcements-section">
        <h2>Company Announcements</h2>
        <div className="announcement-card">
          <h3>New Car Models Available for Rent!</h3>
          <p>We’ve added new car models to our fleet. Check them out and book now!</p>
        </div>
        <div className="announcement-card">
          <h3>Holiday Discounts on Rentals</h3>
          <p>Get a 20% discount on all rentals this holiday season. Hurry, book now!</p>
        </div>
      </section>
    </div>
  );
}

export default Community;
