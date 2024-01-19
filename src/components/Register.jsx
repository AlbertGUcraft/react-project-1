import React, { useEffect } from 'react';
import '../index.css';

function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const regParams = {
        email: formData.get('email'),
        password: formData.get('password')
      };

      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(regParams)
      });

      const res = await response.json();

      if (response.ok) {
        console.log('Registration successful:', res);
      }
    } catch (error) {
      console.error('Something went wrong:', error.message);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="register">
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="your mail" required />
        <input type="password" name="password" placeholder="your password" required />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
