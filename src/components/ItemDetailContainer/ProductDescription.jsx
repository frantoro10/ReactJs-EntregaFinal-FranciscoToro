import React, { useState, useEffect, useContext } from 'react'

import { ProductsContext } from '../../context/ProductsContext'

const ProductDescription = ({ productId }) => {
    const { products } = useContext(ProductsContext)
    const selectedProduct = products.find(item => item.id === productId)

    if (!selectedProduct) {
        return <p>Producto no encontrado</p>;
    }

    const { cores, frequency, description } = selectedProduct;

    return (
        <div>
            <div>
                <h2>
                    Caracteristicas generales:
                </h2>
                <ul>
                    <li>Nucleos: {cores}</li>
                    <li>Frecuencia: {frequency}</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Descripcion:</h3>
                <div>
                    <p>
                        {description}
                    </p>
                </div>
            </div>


        </div>
    )
}

export default ProductDescription