import React from 'react'

export default function Login() {
    const handleClick = (e) => {
        e.preventDefault();
        window.open('https://web-google-login.herokuapp.com/auth/google','_self')
    
      }
  return (
    <div>
        <button onClick={handleClick}>Login with Google</button>
    </div>
  )
}
