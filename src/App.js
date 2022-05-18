import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminNavbar from './components/AdminNavBar';
import EmployeeNavbar from './components/EmployeeNavBar';
import PublicNavbar from './components/PublicNavBar';
import Login from './pages/Sign-In';
import Authentication from './components/Authentication';
import Logs from './pages/Logs';
import Signup from './pages/Sign-Up';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import GatePictures from './components/GatePictures';
import Devices from './pages/Devices';

export default class App extends Component {

  state = {};

  setRole = role => {
    this.setState({
      role: role
    });
  };

  
  render() {
    document.title = 'Automated Secure Gate';

    const RenderNavbar = () => {
      if (this.state.role === 'admin' || (Authentication.getData() && Authentication.getData().role === 'admin')) {
        return <AdminNavbar setRole={this.setRole}/>
      } else if (this.state.role === 'sales' || (Authentication.getData() && Authentication.getData().role === 'sales')) {
        return <EmployeeNavbar setRole={this.setRole}/>
      } else {
        return <PublicNavbar />
      }
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <RenderNavbar />
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/sign-in' element={<Login setRole={this.setRole}/>}/>

              <Route path='/About' element={<About/> }/>
              <Route path='/Contact' element ={<Contact/>} /> 

              <Route path='/sign-up' element={<Signup/>}/>
              <Route path='/logs' element={<Logs/>}/>
              <Route path='/gate/pictures' element={<GatePictures/>}/>

              <Route path='/devices' element={<Devices/>}/>
              
            </Routes>
          </Router>
        </header>
        <footer>
          <div>
            <a href={'/'}><img src={require('./assets/SecureGate-logos_white.png')} alt='logo'/></a>
            <p>Copyright © Secure Gate Inc.</p>
          </div>
        </footer>
      </div>
      
    );

  }
}
