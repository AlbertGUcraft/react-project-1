import '../index.css';
const Login = () => {
  return (
    <div className="login">
      <h2>Login Form</h2>
      <form action="#">
        <input type="email" placeholder="your mail" />
        <input type="password" placeholder="your password" />
        <input type="submit" value={'Log in'} />
      </form>
    </div>
  );
};
export default Login;
