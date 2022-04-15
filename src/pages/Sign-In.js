import '../App.css';
import React from 'react';
import {useState} from 'react';
import Authentication from '../components/Authentication';
import {  useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      const role = await Authentication.login(email, password);
       
      if (role === 'admin' || role === 'sales') {
        props.setRole(role);
        navigate('/');
      }
      
      e.preventDefault();
    }
    return (
    <div className="App">
      <header className="App-header">
        <div className='div-forms'>
          <form>
            <h1>Sign In</h1>
            <label>Email: </label><br/>
            <input type='email' placeholder='user@example.com' onChange={(e) => setEmail(e.target.value)} /> <br/>

            <label>Password: </label><br/>
            <input type='password' onChange={(e) => setPassword(e.target.value)} /> <br/><br/>

            <button type='button' onClick={(e) => handleSubmit(e)}>Sign In</button>

          </form>
        </div>
      </header>
    </div>

    );
}

export default Login;
