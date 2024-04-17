import React from 'react'
import Cart from '../../Assets/cart.png'
import User from '../../Assets/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import Logo from '../../Assets/logo.png'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={Logo} alt="" />
        </div>
        <div className='navbar-icons'>
            <img src={Cart} alt="" height={30}width={30}/>
            <img src={User} alt="" height={30}width={30}/>
        </div>
    </div>
  )
}
