import React, { useState } from 'react';

const RegistrationForm = () => {
  const [isStoreRegistration, setIsStoreRegistration] = useState(false);

  const toggleRegistrationType = () => {
    setIsStoreRegistration(!isStoreRegistration);
  };

  return (
    <div className="registration-container">
      <div className="form">
        <div className="tabs">
          <button
            className={!isStoreRegistration ? 'active' : ''}
            onClick={() => setIsStoreRegistration(false)}
          >
            Sign Up
          </button>
          <button
            className={isStoreRegistration ? 'active' : ''}
            onClick={() => setIsStoreRegistration(true)}
          >
            Store Registration
          </button>
        </div>

        {!isStoreRegistration ? (
          <div className="user-registration">
            <h2>Sign Up</h2>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Last name" />
              <input type="date" placeholder="Birth date" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Register</button>
            </form>
            <p className="login-link">Log in</p>
          </div>
        ) : (
          <div className="store-registration">
            <h2>Store Registration</h2>
            <form>
              <input type="text" placeholder="Store name" />
              <input type="email" placeholder="email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Start selling!</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
