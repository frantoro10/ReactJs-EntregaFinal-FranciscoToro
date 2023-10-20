import React from 'react'
// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// Componentes
import CartModal from '../CartModal/CartModal';
import SearchBar from '../FiltersComponent/SearchBar';
import LoginModal from '../LoginModal/LoginModal'
import NavBar from '../NavBar/NavBar'
// Styles
import styles from './HeaderComponent.module.scss'


const HeaderComponent = ({ username, onLogin }) => {

    // const { cart, setCar t } = useContext(CartContext)

    return (
        <div className={styles.header}>
            <div className={styles.headerBox}>
                <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <div style={{ fontSize: '2em' }}>E-Shop</div>
                </a>
                <SearchBar className={styles.searchBar} />
                <div>
                    {username && <div style={{ color: 'white' }}>Bienvenido, {username}!</div>}
                    <LoginModal onLogin={onLogin} />
                </div>
                <CartModal />
            </div>
            <NavBar />
        </div>

    )
}

export default HeaderComponent