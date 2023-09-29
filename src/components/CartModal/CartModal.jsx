import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartModal.scss'


const CartModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // contexto
  const { cart } = useContext(CartContext)
  const { cartProducts, setCartProducts } = useContext(CartContext)
  const { cartPrice, setCartPrice } = useContext(CartContext)

 
 // Agregar producto al carrito al tocar el contador de la card del modal.
  const handleAddProduct = (productData) => {
    setCartProducts([...cartProducts, productData])
    console.log(cartProducts)
  }

  // Eliminar producto del carrito
  const handleRemoveProduct = (indexToRemove) => {
    console.log("Eliminar producto con ID:", indexToRemove);
    const updatedCart = cartProducts.filter((_, index) => index !== indexToRemove)
    setCartProducts(updatedCart);
    console.log("Carrito actualizado:", updatedCart);
  }

  // funcion precio del carrito.
  const priceCart = () => {
    let price = 0;
    cartProducts.forEach((item) => {
      price += item.price;
    });
    return (price + cartPrice);
  };

  return (
    //   fragmento
    <>
      <div>
        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#eaecf1", }} onClick={handleShow} />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Productos del carrito:</Modal.Title>
        </Modal.Header>

        <Modal.Body>{cartProducts.map((item) => (
          <Card style={{ width: '18rem' }} key={item.id}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.version}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{item.price} </ListGroup.Item>
              <ListGroup.Item>{item.stock}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <ItemCount/>
              <Button variant="primary" onClick={() => { handleRemoveProduct(cartProducts.indexOf(item)) }}>Eliminar</Button>

            </Card.Body>
          </Card>
        ))}
          <div className="boxPrice">
            {/* <p>Cantidad de productos: {cart} </p> */}
            <p>Envio: <span>Gratis</span></p>
            <p>Total: {priceCart()}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default CartModal