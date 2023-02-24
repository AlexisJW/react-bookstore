import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

const Navbar = () => (
  <nav className="navbar">
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink
            to={link.path}
            style={({ isActive }) => ({
              color: isActive ? 'red' : undefined,
            })}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
