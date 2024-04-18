import React from 'react'
import './Payment.css'

export const Payment = () => {
  return (
    <div className='payment-container'>
        <h2>Payment Details</h2>
        <div className="payment-fields">
            <h3>Card Information</h3>
            <input type="text" placeholder='Card Number'/>
            <div className="row">
                <input type="text" placeholder='Expiry Date'/>
                <br />  
                <input type="text" placeholder='CVV'/>
            </div>
            <h3>Name on Card</h3>
            <input type="text" placeholder='Name '/>
            <button>Order</button>
        </div>
    </div>
  )
}
