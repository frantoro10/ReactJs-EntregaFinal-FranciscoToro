import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from '../ItemCount/ItemCount';
import {useContext} from "react"
import {CartContext} from "../../context/CartContext"




const ItemDetailContainer = ({productData}) => {

  const {cart, setCart} = useContext(CartContext)
  const {cartProducts, setCartProducts} = useContext(CartContext)

  const handleAddProduct = () => {
    setCartProducts([...cartProducts, productData])
    console.log(cartProducts)
  }
  const countAdd = () => {
    setCart(cart + 1)
  }
 
  return (
    <Card style={{ width: '18rem' }} key={productData.id}>
      <Card.Img variant="top" src={productData.img} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>
        {productData.version}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{productData.price} </ListGroup.Item>
        <ListGroup.Item>{productData.stock}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary" onClick={() => 
        {handleAddProduct(productData); 
        countAdd()
        }}>Agregar al Carrito</Button>
        <ItemCount/>
      </Card.Body>
    </Card>
    
  )
}


export default ItemDetailContainer
