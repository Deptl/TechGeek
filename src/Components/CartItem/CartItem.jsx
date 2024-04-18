import React, { useContext } from 'react'
import { ShopContext } from '../../Context/TechContext'
import Remove from '../../Assets/delete.png'
import './CartItem.css'

export const CartItem = () => {
    const { Items, cartItems, deleteFromCart, getTotalAmount } = useContext(ShopContext);
    const totalAmount = getTotalAmount();

    const handlePaymentRoute = () => {
        window.location.href = "/payment";
    }

    const handleLoginRoute = () => {
        window.location.href = "/login";
    }
    return (
        <div className='cart-container'>
            {totalAmount > 0 ? <div>
                <h1>Cart</h1>
                <div className="main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {Items.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return <div>
                            <div className="cart-content main">
                                <img src={e.image} alt="" className='cart-product-icon' />
                                <p>{e.itemName}</p>
                                <p>${e.price}</p>
                                <button className='quantity'>{cartItems[e.id]}</button>
                                <p>{e.price * cartItems[e.id]}</p>
                                <img className='cart-remove-icon' src={Remove} onClick={() => { deleteFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    }
                    return null;
                }
                )}
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1>Cart Totals</h1>
                        <div>
                            <div className="cartitems-total-item">
                                <p>Subtotal</p>
                                <p>${getTotalAmount()}</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>${getTotalAmount()}</h3>
                            </div>
                        </div>
                        <button onClick={() => {
                            localStorage.getItem('auth-token') ? handlePaymentRoute() : handleLoginRoute()
                        }}>Proceed to Payment</button>
                    </div>
                </div>
            </div> : <div>
                {localStorage.getItem('auth-token') ? <h3>Please Add items to your cart</h3> : <h3>Please Login to See your cart</h3>}
            </div>}


        </div>
    )
}
