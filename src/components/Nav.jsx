import { NavLink, Outlet } from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
      <Outlet />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
