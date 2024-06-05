import React from 'react'
import logo from './logo2.jpg';
import './navigation.css'

const Navigation = () => {
  return (
    <nav className='container'>
        <div className='logo'>
            
            <img src={logo} alt="Logo" height={90} />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation;