import React, {createContext, useState} from "react";
import {Items} from '../Items'

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for(let i = 0; i < Items.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (id) =>{
        setCartItems((prev) => ({...prev, [id]: prev[id] + 1}));
        console.log(cartItems);
    }

    const deleteFromCart = (id) =>{
        setCartItems((prev) => ({...prev, [id]: prev[id] - 1}));
    }
    
    const getTotalAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = Items.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    const getCartCount = () => {
        let count = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                count += cartItems[item];
            }
        }
        return count;
    }
    
    const contextValue = {Items, cartItems, addToCart, deleteFromCart, getTotalAmount, getCartCount};

    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;