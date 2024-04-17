import React, {createContext} from "react";
import {Items} from '../Items'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const contextValue = {Items};

    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;