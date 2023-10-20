import React from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState, useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import styles from './SearchBar.module.scss'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


const SearchBar = () => {

    const { products, setProducts } = useContext(ProductsContext)
    const { filterProducts, setFilterProducts } = useContext(ProductsContext)



    const searchProduct = (e) => {
        e.preventDefault();
        const search = e.target.value.toLowerCase(); 
        const filteredProducts = products.filter((item) => item.title.toLowerCase().includes(search) || item.version.toLowerCase().includes(search));
        setFilterProducts(filteredProducts);
        // setSearchResult(filteredProducts);
        console.log(filteredProducts);

    }

    return (
        <Container className={styles.searchContainer}>
            <Row >
                <Col   >
                    <Form className={styles.searchBar} >
                        <Form.Control
                            onChange={searchProduct}
                            type="search"
                            placeholder="Buscar productos por categoria o version"
                            className={` ${styles.searchBar}`}
                            aria-label="Search"

                        />
                        {/* <Button type="submit">
                            Buscar
                        </Button> */}
                    </Form>
                </Col>
            </Row>

            {/* <ItemListContainer productsData={filterProducts} /> */}
        </Container>
    )
}

export default SearchBar


