import '../App.css';
import React from 'react';
import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Authentication from '../components/Authentication.js';


const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality]= useState('');
    const [nationalityID, setNationalityID]= useState('');
    const [gender, setGender]= useState('male');
    const [religion, setReligion]= useState('');
    const [phone, setPhone]= useState('');
    const [address, setAddress]= useState('');
    const [jobTitle, setJobTitle] = useState('');

    let select = 'Owner';

    const handleSubmit = (e) => {
        fetch('/add-person', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            select: select,
            national_id: nationalityID,
            nationality: nationality,
            gender: gender,
            religion: religion,
            name: name,
            phone: phone,
            address: address,
            email: email,
            password: password,
            job_title: jobTitle,
            
        })
        }).then((response) => response.json()).then(json => {
            if (json.confirmation === 'success') {
                alert('Success');
            } else if (json.confirmation === 'failure') {
                alert(json.message);
            } else {
                alert('Something\'s Wrong\nPlease try again in other time.');
            }
        }).catch((error) => {
            console.error(error);
            alert('Something\'s Wrong\nPlease check your internet connection.');
        });
        
        e.preventDefault();
    }
    
    const RenderSelect = () => {
        if (Authentication.getData().role === 'admin') {
            return (
                <>
                    <label>Add a: </label>
                    <select onChange={(e) => { select = e.target.value }}>
                        <option value="Owner">Owner</option>
                        <option value="Employee">Employee</option>
                        <option value="Admin">Admin</option>
                    </select>
                    
                    <br/><br/>
                </>
            );
        } else {
            return <Outlet />;
        }
    }


    if (Authentication.getData() && (Authentication.getData().role === 'admin' || Authentication.getData().role === 'sales')) {

        return (
            <div className="App">
            <header className="App-header">
                <div className='div-forms'>
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        <h1>Sign Up</h1>
    
                        <RenderSelect/>

                        
                        <label>Full Name:</label><br/>
                        <input type="text" placeholder='John Smith' required onChange={(e) => { setName(e.target.value) }}/><br/>
                        
                        <label>Email:</label><br />
                        <input type="email" placeholder='user@example.com' required onChange={(e) => { setEmail(e.target.value) }} /><br />
                        
                        <label>Password:</label><br />
                        <input type="password" placeholder='password' required onChange={(e) => { setPassword(e.target.value) }} /><br />
                        
                        <label>Job Title:</label><br/>
                        <input type="text" placeholder='Engineer' required onChange={(e) => { setJobTitle(e.target.value) }}/><br/>

                        <label>Nationality:</label><br/>
                        <input type="text" placeholder='Egyptian' required onChange={(e) => { setNationality(e.target.value) }}/><br/>
    
                        <label>NationalID:</label><br/>
                        <input type="text" placeholder='29912100448899' minLength="16" maxLength="16" required  onChange={(e) => { setNationalityID(e.target.value) }}/><br/>
    
                        <label>Gender:</label><br/>
                        <select onChange={(e) => { setGender(e.target.value) }}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select><br/>
    
                        <label>Religion:</label><br/>
                        <input type="text" placeholder='muslim' required onChange={(e) => { setReligion(e.target.value) }}/><br/>
    
                        <label>Phone:</label><br/>
                        <input type="text" placeholder='01234567890' required onChange={(e) => { setPhone(e.target.value) }}/><br/>
    
                        <label>Address:</label><br/>
                        <input type="text" placeholder='123 smith st.' required  onChange={(e) => { setAddress(e.target.value) }}/><br/><br/>
    
                        <button type="button" onClick={(e) => handleSubmit(e) }>submit</button>
                        
                    </form>
                </div>
            </header>
            </div>
        );
    } else {
        return (
            <h1>UnAuthorized</h1>
          );
    }
}

export default Signup; 