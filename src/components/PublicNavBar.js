import '../App.css';
import { Link } from 'react-router-dom';

const PublicNavbar = () => {
  return (
    <nav className='navbar'>
      <a href={'/'}><img src={require('../assets/SecureGate-logos_black.png')} alt='logo' /></a>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/sign-in'>Sign In</Link>
        <Link to='/About'>About Us</Link>
        <Link to='/Contact'>Contact Us</Link>
      </div>
    </nav>
  );
}
 
export default PublicNavbar;
