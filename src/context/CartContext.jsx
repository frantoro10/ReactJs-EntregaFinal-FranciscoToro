import { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [cart, setCart] = useState(0);
    const [cartPrice, setCartPrice] = useState(0);

    return (
        <CartContext.Provider value={{cart, setCart, cartProducts, setCartProducts, cartPrice, setCartPrice }}>
               {children}
        </CartContext.Provider>
    )

}