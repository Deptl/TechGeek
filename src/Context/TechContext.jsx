import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

//Setting default cart 
const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 20 + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    // Setting items in use state
    const [Items, setItems] = useState([]);
    // Setting cartitems in use state
    const [cartItems, setCartItems] = useState(getDefaultCart());

    //Function for fetching Products from database using API
    const getProducts = async () => {
        const res = await fetch("http://localhost:4000/allproducts")
        const data = await res.json();
        console.log("Fetched items:", data);
        setItems(data);
        
        //Checking the user is logged in or not and getting the the cart data which is saved for specific user
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

    //Function for adding to cart functionality
    const addToCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
        console.log(cartItems);

        //Checking if user is logged in and then adding products to cart of specific user
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

    //Function for deleting from cart functionality
    const deleteFromCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));

        //Checking if user is logged in and then deleting products from cart of specific user
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

    //Function for getting total amount of whole cart and setting it in cart page
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

    //Function for getting cart count which is used in navbar
    const getCartCount = () => {
        let count = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                count += cartItems[item];
            }
        }
        return count;
    }

    //Function for clearing cart
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