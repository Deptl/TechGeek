import React, { useContext } from 'react'
import Cart from '../../Assets/cart.png'
import User from '../../Assets/user.png'
import Logout from '../../Assets/logout.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import Logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/TechContext'

export const Navbar = () => {
  const {getCartCount} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <Link to='/'><img src={Logo} alt="" /></Link>
        </div>
        <div className='navbar-icons'>
          {localStorage.getItem('auth-token') ? <img src={Logout} onClick={() => {localStorage.removeItem('auth-token'); window.location.replace("/");}} height={30}width={30}/> :<Link to='/login'><img src={User} alt="" height={30}width={30}/></Link>}
          <Link to='/cart'><img src={Cart} alt="" height={30}width={30}/></Link>
          <div className='cart-count'>{getCartCount()}</div>
        </div>
    </div>
  )
}
