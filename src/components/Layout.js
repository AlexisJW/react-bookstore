import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="Bookstore-CMS">
    <div className="panel-bg">
      <Navbar />
      <Outlet />
    </div>
  </div>
);
export default Layout;
