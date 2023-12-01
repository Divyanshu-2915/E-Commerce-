
import React, { useState } from 'react';
import axios from 'axios';

function LoginUser() {
    const [data, setData] = useState(null);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const userLogin = async (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            alert("Please fill in all fields !");
            return;
        }

        setLoading(true);
            const response = await axios({
                method: 'POST',
                baseURL: 'http://127.0.0.1:8000/login/',
                data: {
                "username": username,
                "email": email,
                "password": password,
                },
            });
            setData(response.data);
    };

    return (
        <>
            <div>
                <form onSubmit={userLogin}>
                    <label htmlFor='Username'> Enter User Name</label>
                    <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUserName(e.target.value)} />
                    <label htmlFor='Email'> Enter E-Mail</label>
                    <input type="email" placeholder="Enter Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor='Password'> Enter Password</label>
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" disabled={loading}> Login </button>
                </form>

                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {data && <p style={{ color: 'green' }}>Login Successfully !</p>}
            </div>
        </>
    );
}

export default LoginUser;

//---
//977415f439a1d6d1d3ab04d1a3b5cc394250e0a4

