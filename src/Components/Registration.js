
import React, { useState } from 'react';
import axios from 'axios';

function User() {
    const [newdata, setNewData] = useState(null);
    const [newusername, setNewUserName] = useState('');
    const [newemail, setNewEmail] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addUser = async (e) => {
        e.preventDefault();

        if (!newusername || !newemail || !newpassword || !confirmpassword) {
            alert("Please fill in all fields !");
            return;
        }

        if(newpassword !== confirmpassword){
            alert("Password are not same !!");
            return;
        }

            setLoading(true);
            const response = await axios({
                method: 'POST',
                baseURL: 'http://127.0.0.1:8000/register/',
                newdata: {
                "username": newusername,
                "email": newemail,
                "password1": newpassword,
                "password2": confirmpassword
                },
            });
            setNewData(response.newdata);
    };

    return (
        <>
            <div>
                <form onSubmit={addUser}>
                    <label htmlFor='Username'> Enter User Name</label>
                    <input type="text" placeholder="Enter Username" value={newusername} onChange={(e) => setNewUserName(e.target.value)} />
                    <label htmlFor='Email'> Enter E-Mail</label>
                    <input type="email" placeholder="Enter Mail" value={newemail} onChange={(e) => setNewEmail(e.target.value)} />
                    <label htmlFor='Password'> Enter Password</label>
                    <input type="password" placeholder="Enter Password" value={newpassword} onChange={(e) => setNewPassword(e.target.value)} />
                    <label htmlFor='ConfirmPassword'> Confirm Password </label>
                    <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button type="submit" disabled={loading}> Register </button>
                </form>

                
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {newdata && <p style={{ color: 'green' }}>User registered successfully!</p>}
            </div>
        </>
    );
}

export default User;

//---

