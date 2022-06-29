import '../App.css';
import { Link } from 'react-router-dom';
import Authentication from './Authentication';

const AdminNavbar = (props) => {

  const handleLogout = () => {
    Authentication.logout();
    props.setRole(null);
  }

  return (
    <nav className='navbar'>
      <a href={'/'}><img src={require('../assets/SecureGate-logos_black.png')} alt='logo' /></a>
      <div className='links'>
        Welcome, {Authentication.getData().name}.
        <Link to='/'>Home</Link>
        <Link to='/logs'>Logs</Link>
        <Link to='/devices'>Devices</Link>
        <Link to='/sign-up'>Add a Person</Link>
        <Link to='/' onClick={handleLogout}>Logout</Link>
      </div>
    </nav>
  );
}
 
export default AdminNavbar;
