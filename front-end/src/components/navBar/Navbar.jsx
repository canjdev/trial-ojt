import React from 'react'
import './Navbar.css'
import logo from '../../assets/onlife_logo.png'
const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li> Home</li>
            <li> About Us</li>
            <li> Contact</li>
            <li> Service</li>
        </ul>
    </nav>
  )
}

export default Navbar