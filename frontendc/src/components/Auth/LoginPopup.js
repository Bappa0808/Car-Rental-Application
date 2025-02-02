import React, { useState } from "react";
import "./LoginPopup.css";
import api from "../../services/api";

function LoginPopup({ show, handleClose, setLoggedInUser }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const token = await api.login({ email, password });
        // Save the token in localStorage to persist login state
        localStorage.setItem("token", token);
        setLoggedInUser(email);  // Update logged-in user state
        handleClose();  // Close the popup after successful login
      } else {
        await api.register({ email, password, confirmPassword });
        alert("Signup successful! Please login.");
        setIsLogin(true);  // Switch to login form after successful registration
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>X</button>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          {!isLogin && (
            <>
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />
            </>
          )}
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <p>
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <span onClick={toggleForm} className="toggle-link">Sign up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={toggleForm} className="toggle-link">Login</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default LoginPopup;
