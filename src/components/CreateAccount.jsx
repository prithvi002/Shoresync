import React, { useState } from 'react';
import './CreateAccount.css'; // Import the CSS file 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Successfully signed up with ShoreSync!");


    // Perform validation, check if passwords match, etc.
    console.log('Submitted:', { email, password, confirmPassword });
    // Reset form fields after submission
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="account-container">
        <img src={"favicon.ico"} alt="Logo" />
      <h2 >Sign Up to ShoreSync</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Password must contain at least one number, one uppercase and one lowercase letter, and at least 8 or more characters"
            required
          />
          <small style={{ fontStyle: 'italic'}}>Password must contain at least one number, one uppercase and one lowercase letter, and at least 8 or more characters.</small>
        </div>
        <br></br>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            pattern={password}
            title="Password must match the above password"
            onChange={handleConfirmPasswordChange}
            required
          />
          
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default CreateAccount;
