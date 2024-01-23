import '../index.css';
import { FormEvent, useState } from 'react';

const Login = () => {
  const [registrationMessage, setRegistrationMessage] = useState('');
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

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

      if (response.ok) {
        setRegistrationMessage('You Are Logged In');
      } else {
        setRegistrationMessage('Something went wrong');
      }
    } catch (error) {
      console.info('Error:', (error as { message: string }).message);
      setRegistrationMessage('Something went wrong');
    }
  };

  return (
    <div className="login">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="your mail" required />
        <input type="password" name="password" placeholder="your password" required />
        <input type="submit" value={'Log in'} />
      </form>
      <p>{registrationMessage}</p>
    </div>
  );
};

export default Login;
