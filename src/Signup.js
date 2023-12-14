import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    country: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const formStyles = {
    backgroundColor: '',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: 'auto',
  };

  const labelStyles = {
    display: 'block',
    marginBottom: '8px',
    color: '#333',
  };

  const inputStyles = {
    width: '100%',
    padding: '8px',
    marginBottom: '12px',
    boxSizing: 'border-box',
  };

  const buttonStyles = {
    background: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div>

    <h1 style={{textAlign:'center'}}>SIGN UP</h1>
    <form onSubmit={handleSubmit} style={formStyles}>
      <label style={labelStyles}>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          style={inputStyles}
          />
      </label>
      <br />
      <label style={labelStyles}>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          style={inputStyles}
          />
      </label>
      <br />
      <label style={labelStyles}>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          style={inputStyles}
          />
      </label>
      <br />
      <label style={labelStyles}>
        Gender:
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          style={inputStyles}
          >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />
      <label style={labelStyles}>
        Country:
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          style={inputStyles}
          />
      </label>
      <br />
      <label style={labelStyles}>
        Address:
        <textarea
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          style={inputStyles}
          />
      </label>
      <br />
      <p>Already have an Account?<Link to="/">Login</Link></p>
      <button type="submit" style={buttonStyles}>
        Submit
      </button>
    </form>
</div>
  );
};

export default MyForm;