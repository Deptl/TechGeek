import React, { useContext } from 'react'
import './Payment.css'
import { ShopContext } from '../../Context/TechContext'

export const Payment = () => {
    const {clearCart} = useContext(ShopContext);
    const handleNavigation = () => {
        window.location.href = "/"
    }
    return (
        <div className='payment-container'>
            <h2>Payment Details</h2>
            <div className="payment-fields">
                <h3>Card Information</h3>
                <input type="text" placeholder='Card Number' />
                <div className="row">
                    <input type="text" placeholder='Expiry Date' />
                    <br />
                    <input type="text" placeholder='CVV' />
                </div>
                <h3>Name on Card</h3>
                <input type="text" placeholder='Name ' />
                <button onClick={() => {
                    handleNavigation()
                    clearCart()
                }}>Order</button>
            </div>
        </div>
    )
}
