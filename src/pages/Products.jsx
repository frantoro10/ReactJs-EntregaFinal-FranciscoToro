import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import FiltersMenu from '../components/FiltersComponent/FiltersMenu'
import styles from './Products.module.scss'
import {useContext} from 'react'
import {ProductsContext} from '../context/ProductsContext'
import {useNavigate} from 'react-router-dom'



const Products = () => {

const {products, loading, filterProducts} = useContext(ProductsContext)


return (
  
  <div className={styles.productsBox}>
    
  <FiltersMenu/>
  {filterProducts.length > 0 ? (
    <ItemListContainer productsData={filterProducts} />
  ) : (
    <ItemListContainer productsData={products} />
  )}
  </div>
)
    
  }
  
  export default Products
