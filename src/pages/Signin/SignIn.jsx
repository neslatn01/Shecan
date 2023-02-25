import React, { useState } from 'react';
import './SignIn.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Sign In</h2>
        <input className="form-input" type="text" placeholder="Username" />
        <input className="form-input" type="password" placeholder="Password" />
        <button className="form-button">Sign In</button>
      </div>
    </div>
  );
}

export default SignIn;

