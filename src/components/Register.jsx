import '../index.css';
function Register() {
  return (
    <div className="register">
      <h2>Register Form</h2>
      <form action="#">
        <input type="text" placeholder="FirstName LastName" />
        <input type="email" placeholder="your mail" />
        <input type="password" placeholder="your password" />
        <input type="submit" value={'Register'} />
      </form>
    </div>
  );
}
export default Register;
