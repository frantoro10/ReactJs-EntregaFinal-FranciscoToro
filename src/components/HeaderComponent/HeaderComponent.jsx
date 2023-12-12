import React from 'react'
// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// Componentes
import CartModal from '../CartModal/CartModal';
import SearchBar from '../FiltersComponent/SearchBar';
import LoginModal from '../LoginModal/LoginModal'
import NavBar from '../NavBar/NavBar'
// Styles
import { Link } from "react-router-dom";
import styles from './HeaderComponent.module.scss'


const HeaderComponent = ({ username, onLogin }) => {

    // const { cart, setCar t } = useContext(CartContext)

    return (
        <header>
            <div className={styles.header}>
                <div className={styles.headerBox}>
                    <div className={styles.brandBox}>
                        <Link to={"/"} className={styles.brandName}>E-Shop</Link>
                    </div>

                    <div className={styles.searchBox}>
                        <SearchBar className={styles.searchBar} />
                    </div>

                    <div className={styles.modalBox}>
                    {username && <div style={{ color: 'white', marginTop:"1em" }}>Bienvenido, {username}!</div>}
                        <LoginModal onLogin={onLogin} />
                        <CartModal className={styles.cartModal}/>
                    </div>
                </div>
                <NavBar />
            </div>
        </header>
    )
}

export default HeaderComponent