import '../App.css';
import { Link } from 'react-router-dom';
import Authentication from './Authentication';

const EmployeeNavbar = (props) => {

  const handleLogout = () => {
    Authentication.logout();
    props.setRole('null');
  }

  return (
    <nav className='navbar'>
        <a href={'/'}><img src={require('../assets/SecureGate-logos_black.png')} alt='logo' /></a>
        <div className='links'>
          Welcome, {Authentication.getData().name}.
          <Link to='/'>Home</Link>
          <Link to='/sign-up'>Add an owner</Link>
          <Link to='/' onClick={handleLogout}>Logout</Link>
      </div>
    </nav>
  );
}
 
export default EmployeeNavbar;
