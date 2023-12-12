import React, { useState, useEffect } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { useContext } from 'react'
import ProductCarousel from '../components/ProductCarousel/ProductCarousel'
import ControlledCarousel from '../components/ControlledCarousel/ControlledCarousel'
import styles from './Home.module.scss'
import '../styles.scss'

const Home = () => {

  const { products } = useContext(ProductsContext);
  const [productsOferta, setProductsOferta] = useState([]);

  useEffect(() => {
    const ProductosOferta = products.filter(products => products.enOferta === true);
    setProductsOferta(ProductosOferta);
    console.log(productsOferta)
  }, [products])

  return (

    <div className={styles.boxDiv}>
      <div>
        <ControlledCarousel className={styles.controlledC}/>
      </div>
      <div className={styles.h2Box}>
        <h2 className="h2-title" >Las mejores ofertas del momento:</h2>
      </div>
      <div>
        <ProductCarousel products={productsOferta} />
      </div>

    </div>



  )
}

export default Home