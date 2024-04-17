import React from 'react'
import './Footer.css'
import Instagram from '../../Assets/instagram.png'
import Twitter from '../../Assets/twitter.png'
import Pinterest from '../../Assets/pinterest.png'
import Facebook from '../../Assets/facebook.png'
import Logo from '../../Assets/logo.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={Logo} height={100}width={100} />
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={Instagram} height={30}width={30} />
            </div>
            <div className="footer-icons-container">
                <img src={Pinterest} height={30}width={30}/>
            </div>
            <div className="footer-icons-container">
                <img src={Twitter} height={30}width={30} />
            </div>
            <div className="footer-icons-container">
                <img src={Facebook} height={30}width={30} />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright © 2024 TechGeek. All rights reserved.</p>
        </div>
    </div>
  )
}
