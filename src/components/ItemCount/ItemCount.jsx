import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const ItemCount = ({onAdd}) => {
    const [count, setCount] = useState(0);
    const {cart, setCart} = useContext(CartContext)
    const {cartProducts, setCartProducts} = useContext(CartContext)
   


const handleAddProduct = () => {
    setCart(cart + 1)
    setCount(count + 1)
    onAdd()


}
const handleRemoveProduct = () => {
    setCart(cart - 1)
    setCount(count - 1)
}


    return (
        <div>
            <button onClick={handleAddProduct}>+</button>
            <label >{count}</label>
            <button onClick={handleRemoveProduct}>-</button>
        </div>
    )
}

export default ItemCount