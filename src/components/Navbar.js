import { NavLink } from 'react-router-dom';
import UserIcon from '../icon';

const Navbar = () => (
  <nav className="nav-container">
    <span className="logo"> Bookstore CMS </span>
    <ul className="link-container">
      <li key="BOOKS">
        <NavLink
          to="/"
        >
          <span className="books text-style-3"> BOOKS </span>
        </NavLink>
      </li>
      <li key="CATEGORIES">
        <NavLink
          to="categories"
        >
          <span className="categories text-style-3"> CATEGORIES </span>
        </NavLink>
      </li>
      <div className="mask">
        <UserIcon />
      </div>
    </ul>
  </nav>
);
export default Navbar;
