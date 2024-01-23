import React, { useState, FormEvent } from 'react';
import '../index.css';

function Register() {
  const [registrationMessage, setRegistrationMessage] = useState<string>('');
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const regParams = [...formData].reduce(
        (accumulator, currentValue) => {
          accumulator[currentValue[0]] = currentValue[1];
          return accumulator;
        },
        {} as { [key: string]: string | FormDataEntryValue }
      );

      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(regParams)
      });

      // const res = await response.json();
      if (response.ok) {
        setRegistrationMessage('Registration successful');
      } else {
        setRegistrationMessage('Something went wrong');
      }
    } catch (error) {
      console.info('Something went wrong:', (error as { message: string }).message);
      setRegistrationMessage('Something went wrong');
    }
  };

  return (
    <div className="register">
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="your mail" required />
        <input type="password" name="password" placeholder="your password" required />
        <input type="submit" value="Register" />
      </form>
      <p>{registrationMessage}</p>
    </div>
  );
}

export default Register;
