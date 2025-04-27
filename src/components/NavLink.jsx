import { Link } from 'react-router-dom';

export const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-600 hover:text-farm-green transition-colors"
  >
    {children}
  </Link>
);