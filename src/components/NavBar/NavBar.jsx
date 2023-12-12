// para practicar hook / estado
import { useState } from "react";
import { Link } from "react-router-dom";
// Componentes de bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Styles                               
import styles from "./NavBar.module.scss"

const NavBar = ({ username, onLogin }) => {
  

  return (
    <Navbar expand="lg" bg="dark" variant='dark'>
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias"> 
            <NavDropdown.Item><Link to={"category/procesadores"}>Procesadores</Link> </NavDropdown.Item>  
            <NavDropdown.Item >
              <Link to={"category/placas-de-video"}>Placas de video</Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <Link to={"category/memorias"}> Memorias ram </Link>
            </NavDropdown.Item>
            </NavDropdown>
            <ul className={styles.liContainer}>
              <li>
            <Link to={"products"}>Productos</Link>
            </li>
            <li style={{color:"white"}}>Ofertas de la semanas
            </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

