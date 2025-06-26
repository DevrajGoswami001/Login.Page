import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [accountType, setAccountType] = useState('Examiner');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(username)) {
      setEmailError(true);
      setSuccess(false);
      return;
    } else {
      setEmailError(false);
    }

    setSuccess(true);
    // Add your login logic here
  };

  return (
    <div className="login-main-container">
      <div className="login-card">
        <div className="login-logo-section">
          <div className="logo-placeholder">
            <span className="logo-your">Your</span>
            <span className="logo-logo"><h3>Logo</h3></span>
          </div>
        </div>

        <form className="login-form-section" onSubmit={handleSubmit}>
          <div className="account-type-title">Choose Account Type</div>
          <div className="account-type-options">
            <div
              className={`account-option ${accountType === 'Examiner' ? 'selected' : ''}`}
              onClick={() => setAccountType('Examiner')}
            >
              <div className="icon-wrapper">
                <span className="account-icon">👤</span>
                {accountType === 'Examiner' && <span className="checkmark">✔️</span>}
              </div>
              <p>Examiner</p>
            </div>
            <div
              className={`account-option ${accountType === 'Moderator' ? 'selected' : ''}`}
              onClick={() => setAccountType('Moderator')}
            >
              <div className="icon-wrapper">
                <span className="account-icon">🛡️</span>
                {accountType === 'Moderator' && <span className="checkmark">✔️</span>}
              </div>
              <p>Moderator</p>
            </div>
          </div>

          <div className="greeting">Hello {accountType} ! Please enter your details to get started.</div>

          <div className={`input-group ${emailError ? 'error' : ''}`}>
            <span className="input-icon">👤</span>
            <input
              type="email"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          {emailError && <div className="error-message">Please enter a valid email address.</div>}

          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
              title={showPassword ? 'Hide Password' : 'Show Password'}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          {success && (
            <div className="success-captcha">
              <div className="success-msg">✅ Success!</div>
              <div className="captcha-placeholder">CLOUDFLARE<br /><span className="captcha-privacy">Privacy • Terms</span></div>
            </div>
          )}

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember Me
            </label>
          </div>

          <div className="login-btn-wrapper">
            <button type="submit" className="login-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
