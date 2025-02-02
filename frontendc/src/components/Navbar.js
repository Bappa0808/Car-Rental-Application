import React, { useState, useEffect } from "react";
import "../style/Navbar.css";
import LoginPopup from "./Auth/LoginPopup.js";
import { useNavigate } from "react-router-dom"; // For navigation

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate(); // React Router hook for navigation

  // Check if the user is logged in by looking for the token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userEmail = decodeJwt(token); // Decode the token to get the email
      setLoggedInUser(userEmail);
    }
  }, []);

  const decodeJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload).sub; // Assuming email is stored in "sub"
  };

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNavbar = () => {
    setIsNavCollapsed(true);
  };

  const handleLoginClick = () => {
    setShowPopup(true); // Show the login/signup popup when Login is clicked
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup when close button is clicked
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token from localStorage
    setLoggedInUser(null); // Clear logged-in user state
    navigate("/"); // Redirect to the home page after logout
  };

  const getUsernameFromEmail = (email) => {
    return email.split("@")[0];
  };

  return (
    <div className="navbar_main">
      <div className="logo">Car Rental</div>
      <div className={`nav_items ${isNavCollapsed ? "" : "active"}`}>
        <ul>
          <li>
            <a href="/" onClick={closeNavbar}>
              Home
            </a>
          </li>
          <li>
            <a href="/list-of-car" onClick={closeNavbar}>
              Carlist
            </a>
          </li>
          {loggedInUser && (
            <li>
              <a href="/dashboard" onClick={closeNavbar}>
                Dashboard
              </a>
            </li>
          )}
          <li>
            <a href="/community" onClick={closeNavbar}>
              Community
            </a>
          </li>
          <li>
            <a href="/contact" onClick={closeNavbar}>
              Contact
            </a>
          </li>
          {loggedInUser ? (
            <>
              <li className="logged-in-user">
                Welcome, {getUsernameFromEmail(loggedInUser)}
              </li>
              <li>
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <li>
              <a href="#" onClick={handleLoginClick}>
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
      <button className="navbar-toggler" onClick={handleNavCollapse}>
        ☰
      </button>
      <LoginPopup
        show={showPopup}
        handleClose={handleClosePopup}
        setLoggedInUser={setLoggedInUser} // Pass the state updater to LoginPopup
      />
    </div>
  );
}

export default Navbar;
