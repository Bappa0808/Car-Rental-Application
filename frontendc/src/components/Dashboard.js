import React from 'react';
import '../style/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <p>Manage your car rentals, track bookings, and access quick tools all in one place.</p>
      </div>

      {/* Metrics Section */}
      <div className="dashboard-metrics">
        <div className="metric-card">
          <h2>Total Bookings</h2>
          <p>245</p>
        </div>
        <div className="metric-card">
          <h2>Cars Available</h2>
          <p>120</p>
        </div>
        <div className="metric-card">
          <h2>Revenue</h2>
          <p>$18,540</p>
        </div>
        <div className="metric-card">
          <h2>Pending Requests</h2>
          <p>8</p>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <button className="action-button">Add New Car</button>
          <button className="action-button">View All Bookings</button>
          <button className="action-button">Generate Report</button>
          <button className="action-button">Update Pricing</button>
        </div>
      </div>

      {/* Booking History Section */}
      <div className="booking-history">
        <h2>Recent Booking History</h2>
        <div className="history-list">
          <div className="history-item">
            <p><strong>John Doe</strong> - Tesla Model 3</p>
            <p>
  Date: 2025-01-10 | Status: <span style={{ color: 'green' }}>Completed</span>
          </p>

          </div>
          <div className="history-item">
            <p><strong>Jane Smith</strong> - BMW X5</p>
            <p>Date: 2025-01-08 | Status:<span style={{ color: 'red' }}>Pending</span></p>
          </div>
          <div className="history-item">
            <p><strong>Mark Johnson</strong> - Audi Q7</p>
            <p>Date: 2025-01-07 | <span style={{ color: 'green' }}>Completed</span></p>
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="notifications-section">
        <h2>Notifications</h2>
        <ul className="notifications-list">
          <li className="notification-item">New booking request for Toyota Camry.</li>
          <li className="notification-item">Revenue report for December is ready.</li>
          <li className="notification-item">Car maintenance required for Honda Civic.</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;