import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 300 + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [Items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getProducts = async () => {
        const res = await fetch("http://localhost:4000/allproducts")
        const data = await res.json();
        console.log("Fetched items:", data);
        setItems(data);

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getCart', {
                method: 'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: "",
        }).then((resp) => resp.json())
        .then((data) => setCartItems(data));
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    const addToCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
        console.log(cartItems);
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({"itemId": id})
            })
            .then((resp) => resp.json())
            .then((data)=>console.log(data))
        }
    }

    const deleteFromCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/deletefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({"itemId": id})
            })
            .then((resp) => resp.json())
            .then((data)=>console.log(data))
        }
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = Items.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    const getCartCount = () => {
        let count = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                count += cartItems[item];
            }
        }
        return count;
    }

    const clearCart = () => {
        setCartItems({})
    }

    const contextValue = { Items, cartItems, addToCart, deleteFromCart, getTotalAmount, getCartCount, clearCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;