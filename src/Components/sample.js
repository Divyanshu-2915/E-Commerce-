
import React from 'react';
import './sample.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

function NewUser() {
    const [isContainerActive, setContainerActive] = useState(false);
    const [newdata, setNewData] = useState(null);
    const [newusername, setNewUserName] = useState('');
    const [newemail, setNewEmail] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    //---
    const [data, setData] = useState(null);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState()
    //---
    const addUser = async (e) => {
        e.preventDefault();

        if (!newusername || !newemail || !newpassword || !confirmpassword) {
            alert("Please fill in all fields !");
            return;
        }

        if (newpassword !== confirmpassword) {
            alert("Password are not same !!");
            return;
        }
        const response = await axios({
            method: 'POST',
            baseURL: 'http://127.0.0.1:8000/register/',
            data: {
                "username": newusername,
                "email": newemail,
                "password1": newpassword,
                "password2": confirmpassword
            },
        });
        setNewData(response.newdata);
    };
    //---
    const userLogin = async (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            alert("Please fill in all fields !");
            return;
        }
        const response = await axios({
            method: 'POST',
            baseURL: 'http://127.0.0.1:8000/login/',
            data: {
                "username": username,
                "email": email,
                "password": password,
            },
        });

        if (!token) {
            { return <Navbar setToken={setToken} /> }
        }
        setData(response.data);
    };

    //---
    const handleRegisterClick = () => {
        setContainerActive(true);
        var allInputs = document.querySelectorAll('input');
        allInputs.forEach(singleInput => singleInput.value = '');
    };

    const handleLoginClick = () => {
        setContainerActive(false);
        var allInputs = document.querySelectorAll('input');
        allInputs.forEach(singleInput => singleInput.value = '');
    };

    return (
        <>
            <div className={`container ${isContainerActive ? 'active' : ''}`} id="container">
                <div class="form-container sign-up">
                    <form onSubmit={addUser} id="signup-form">
                        <h1> Sign Up </h1>
                        <label htmlFor='Username'> Enter User Name</label>
                        <input type="text" placeholder="Enter Username" value={newusername} onChange={(e) => setNewUserName(e.target.value)} />
                        <label htmlFor='Email'> Enter E-Mail</label>
                        <input type="email" placeholder="Enter Mail" value={newemail} onChange={(e) => setNewEmail(e.target.value)} />
                        <label htmlFor='Password'> Enter Password</label>
                        <input type="password" placeholder="Enter Password" value={newpassword} onChange={(e) => setNewPassword(e.target.value)} />
                        <label htmlFor='ConfirmPassword'> Confirm Password </label>
                        <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <button type="submit">Register</button>
                        {newdata && <p style={{ color: 'green' }}>User registered successfully!</p>}
                    </form>
                </div>
                <div class="form-container sign-in">
                    <form onSubmit={userLogin} id="signin-form">
                        <h1> Sign In </h1>
                        <label htmlFor='Username'> Enter User Name</label>
                        <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUserName(e.target.value)} />
                        <label htmlFor='Email'> Enter E-Mail</label>
                        <input type="email" placeholder="Enter Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor='Password'> Enter Password</label>
                        <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Login</button>
                        {data && <p style={{ color: 'green' }}>Login Successfully !</p>}
                    </form>
                </div>
                <div class="toggle-container">
                    <div class="toggle">
                        <div class="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button onClick={handleLoginClick}>Sign In</button>
                        </div>
                        <div class="toggle-panel toggle-right">
                            <h1>Welcome, Friend!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button onClick={handleRegisterClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default NewUser;

