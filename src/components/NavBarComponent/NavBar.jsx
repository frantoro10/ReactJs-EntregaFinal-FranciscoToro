// para practicar hook / estado
import {useState} from "react";
import {Link} from "react-router-dom";
// Componentes de bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Componentes propios
import CartWidget from '../CartWidget/CartWidget';
import CartModal from '../CartModal/CartModal'; 
import ItemCount from '../ItemCount/ItemCount';
// Importo contexto para usar el carrito
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; 
// Librerias animaciones
// Styles
import styles from "./NavBar.module.scss"   

const NavBarComponent = () => {
  const {cart, setCart} = useContext(CartContext)
 


  return (
    <Navbar  expand="lg" bg="dark" variant='dark'>
      <Container >
        <Navbar.Brand><Link to={"/"}> Full Shop </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to={"category/procesadores"}>Procesadores</Link> </NavDropdown.Item>
              <NavDropdown.Item >
              <Link to={"category/placas-de-video"}>Placas de video</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link to={"category/memorias"}> Memorias ram </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div style={{color: 'white'}}> {cart} </div>
        <CartModal/>
      </Container>
      
    </Navbar>
  );
}

export default NavBarComponent;

