import React from 'react'
import Cart from '../../Assets/cart.png'
import User from '../../Assets/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import Logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <Link to='/'><img src={Logo} alt="" /></Link>
        </div>
        <div className='navbar-icons'>
          <Link to='/login'><img src={User} alt="" height={30}width={30}/></Link>
          <Link to='/cart'><img src={Cart} alt="" height={30}width={30}/></Link>
          <div className='cart-count'>0</div>
        </div>
    </div>
  )
}
