import React from 'react';
import {useState, useEffect, useContext } from 'react';
import {CartContext} from "../context/CartContext";
import styles from './CartPage.module.scss';
const CartPage = () => {
    
const {cartProducts, setCartProducts} = useContext(CartContext);
const [products, setProducts] = useState(cartProducts);

    const handleQuantifyChange = (id, quantify) => {

        setProducts(prevProducts => prevProducts.map(product => product.id === id ? {...product, quantify} : product)); 
    };

    const calcularSubTotal = (price, quantify) => {
        return price * quantify;
    }

  return (
    <div className={styles.cartPage}>
        <div className={styles.formProducts} >
            <form action="">
                <table>
                    <thead>
                        <th>Producto</th>
                        <th> Precio </th>
                        <th> Cantidad </th>
                        <th> Subtotal </th>
                    </thead>
                    <tbody>
                        {products.map(item => (
                          <tr key={item.id}>
                            <td className={styles.dataImg}> <img src={item.img} alt="Producto no encontrado" /> 
                            <span className={styles.productVersion}>{item.version}</span>
                            </td>
                            <td> <span className={styles.dataPrice}>${item.price.toFixed(2)}</span>
                            </td>
                            <td> <input type="number" className={styles.dataQuantify} value={item.quantify} onChange={(e) => handleQuantifyChange(item.id, parseInt(e.target.value, 10) )} min="1"/> 
                            </td>
                            <td> <span className={styles.dataSubTotal}>
                            ${calcularSubTotal(item.price, item.quantify).toFixed(2)} 
                            </span>
                            </td>
                          </tr>      
                        ))}
                    </tbody>
                </table>
                {/* <p>	Total: $</p> */}

            </form>
        </div>

    </div>
  )
}

export default CartPage