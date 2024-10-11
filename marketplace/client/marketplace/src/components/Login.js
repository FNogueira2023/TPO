import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-image">
        <img src="your-image-url" alt="Gaming illustration" />
      </div>
      <div className="login-form">
        <h2>Welcome Back!</h2>
        <p>Find awesome games<br />Explore new dimensions</p>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-button">Log in</button>
        </form>
        <div className="form-links">
          <a href="#">Forgot Password</a> | <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
