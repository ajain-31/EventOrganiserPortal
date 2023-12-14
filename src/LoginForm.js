// Login.js
import React, { useState } from 'react';
import './Login.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add login logic here
    console.log('Login clicked');
    console.log(`Email: ${email}, Password: ${password}`);
    // You can add your authentication logic here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <p>Don't have an Account? <Link to="/login">Sign up</Link></p>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
