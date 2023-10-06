import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the input values
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    // Send a request to the server to authenticate the user
    // Your authentication logic goes here

    // Clear the input fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc' }}>
        <h2 style={{ textAlign: 'center' }}>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              style={{ width: '100%', padding: '5px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ width: '100%', padding: '5px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>
              Sign in
            </button>
          </div>
        </form>
        <p style={{ textAlign: 'center' }}>
          <a href="#">Forgot password?</a>
        </p>
        <p style={{ textAlign: 'center' }}>
          Do you have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;