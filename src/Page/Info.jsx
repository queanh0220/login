import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function Info() {
    const [user, setUser] = useState({});
    useEffect(() => {
        axios.get('https://web-google-login.herokuapp.com/auth/success', { withCredentials: true }).then(res => {
            console.log(res)
            setUser(res.data)
        }).catch(err => {
            console.log("err",err);
        })
    },[])
    const navigate = useNavigate()
    const handleLogout = () => {
        document.cookie="token=;expires=" + new Date().toUTCString() + ";path=/"
        navigate('/login');
    }
  return (
    <div>
        <h2>Wellcome {user.name}</h2>
        <p>email: {user.email}</p>
        <button onClick={handleLogout}>Log out</button>
    </div>
  )
}
