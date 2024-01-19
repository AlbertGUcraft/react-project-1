import React, { useEffect } from 'react';
import '../index.css';

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const logParams = {
        email: formData.get('email'),
        password: formData.get('password')
      };

      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(logParams)
      });

      const res = await response.json();

      if (response.ok) {
        console.log('You Are Logged in', res);
      } else {
        console.log('Login failed:', res.error);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    // You don't need to call handleSubmit here
    // Move the code that needs to run on component mount outside the useEffect
  }, []);

  return (
    <div className="login">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="your mail" required />
        <input type="password" name="password" placeholder="your password" required />
        <input type="submit" value={'Log in'} />
      </form>
    </div>
  );
};

export default Login;
