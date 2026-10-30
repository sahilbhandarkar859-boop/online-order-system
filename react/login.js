import React, { useState } from "react";
import "./React.css";

function ReactLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password!");
      return;
    }

    alert("Login form submitted!");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Sign In</h1>

        <div className="progress-line">
          <span></span>
        </div>

        <p className="error-message">
          <span>●</span> Incorrect email or password.
        </p>

        <p className="account-title">
          Insert your account information:
        </p>

        <form onSubmit={handleLogin}>
          <div className="input-box">
            <div className="input-icon">✉</div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-box password-box">
            <div className="input-icon">🔒</div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <p className="forgot-password">
            ✉ &nbsp; Forgot your{" "}
            <a href="#forgot">Password?</a>
          </p>

          <p className="register-text">
            If you have an account, please{" "}
            <a href="#register">Register Here</a>
          </p>

          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReactLogin;