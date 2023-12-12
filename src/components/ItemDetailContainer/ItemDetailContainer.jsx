import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faShieldHalved, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import ItemCount from '../ItemCount/ItemCount'
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify'; 
// Styles
import 'react-toastify/dist/ReactToastify.css';
import styles from "./ItemDetailContainer.module.scss"




const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const { productId } = useParams();
  const { cart, setCart } = useContext(CartContext)
  const { cartProducts, setCartProducts } = useContext(CartContext)

  // Estado para almacenar cantidad seleccionado

  const [selectedCount, setSelectedCount] = useState(1);

  const handleAddProduct = (productt) => {
    const existingProductIndex = cartProducts.findIndex((item) => item.id === productt.id);
    toast.success('Producto agregado correctamente');

    if (existingProductIndex !== -1) {
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[existingProductIndex].price  += productt.price * selectedCount;
      updatedCartProducts[existingProductIndex].quantify += selectedCount;
      setCartProducts(updatedCartProducts);
    } else {
      setCartProducts([...cartProducts, { ...productt, quantify: selectedCount, price: productt.price * selectedCount  }]);
      
    }
  }
 
  // setCartProducts([...cartProducts, productt])
  // console.log(cartProducts)


  const countAdd = () => {
    setCart(cart + selectedCount)
  }

  // Precio de lista
  const listPrice = () => (product.price ? product.price * 2 : '')
  //  12 cuotas sin interes
  const doceCuotas = () => {
    const priceList = listPrice();
    const cuota = priceList / 12;
    const cuotaSinDecimal = Math.round(cuota);
    return cuotaSinDecimal;

  }

  useEffect(() => {
    const db = getFirestore();
    const productItem = doc(db, "products", productId)
    getDoc(productItem).then((snapshot) => { setProduct({ id: snapshot.id, ...snapshot.data() }) });

  }, [productId]);

  return (
    <div className={styles.priceBox}>

      <p>Precio especial <span> <br /> ${product.price ?   product.price : ''}</span></p>
      <div className={styles.priceLista}>
        <p className={styles.pListaUno}> Precio de lista <br /><span>${listPrice()}</span></p>
        <p className={styles.pListaDos}><strong>Hasta 12 Cuotas sin interes de ${doceCuotas()} </strong> <br /> Con el precio de lista!</p>
      </div>
      <div className={styles.iconBox}>
        <p className={styles.green}>
          <FontAwesomeIcon icon={faShieldHalved} size="lg" style={{ color: "#0d6efd", marginRight: "0.2rem" }} />
          Garantia especial!
        </p>
        <p className={styles.green}>
          <FontAwesomeIcon icon={faCheck} size="lg" style={{ color: "#0d6efd", marginRight: "0.2rem" }} />
          Stock disponible</p>
        <p className={styles.green}>
          <FontAwesomeIcon icon={faTruckFast} size="lg" style={{ color: "#0d6efd", marginRight: "0.2rem" }} />
          Envio gratis a todo el pais</p>
      </div>

      <Button variant="primary" onClick={() => {
        handleAddProduct(product);
        countAdd();
      }}>Agregar al Carrito</Button>
      <ItemCount onCountChange={setSelectedCount}/>

    </div>

  )
}


export default ItemDetailContainer
