import React from 'react'
import styles from './FiltersMenu.module.scss'
import { ProductsContext } from '../../context/ProductsContext'
import { useState, useContext, useEffect } from 'react'


const FiltersMenu = () => {

    const { products, setProducts } = useContext(ProductsContext)
    const { filterProducts, setFilterProducts } = useContext(ProductsContext)

    const [selectedCheckboxes, setSelectedCheckboxes] = useState({});


    const filterCategory = (e) => {
        const category = e.target.value.toLowerCase();
        const isChecked = e.target.checked;

        // Actualiza el estado de los checkbox seleccionados
        setSelectedCheckboxes((prevState) => ({
            ...prevState,
            [category]: isChecked,
        }));
    };

    useEffect(() => {
        // Filtra los productos según los checkbox seleccionados
        const filteredProducts = products.filter((item) => {
            if (Object.keys(selectedCheckboxes).length === 0) {
                // Si no hay ningún checkbox seleccionado, muestra todos los productos
                return true;
            }
            return selectedCheckboxes[item.title.toLowerCase()] || selectedCheckboxes[item.brand.toLowerCase()] ;
        });      

        setFilterProducts(filteredProducts);
        console.log(filteredProducts)
    }, [selectedCheckboxes, setFilterProducts, products]);


    return (
        <div className={styles['filter-menu']}>
            <h2>Filtrar Productos</h2>


            <div>
                <h3>Componente</h3>
                {/* Primer Filtro por Marca */}
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" name="category" value="placa de video" onChange={filterCategory} checked={selectedCheckboxes['placa de video'] || false}/>
                            Placas de video
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="category" value="procesador" onChange={filterCategory} checked={selectedCheckboxes['procesador'] || false} />
                            Procesadores
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="category" value="memoria ram" onChange={filterCategory} checked={selectedCheckboxes['memoria ram'] || false} />
                            Memorias Ram
                        </label>
                    </li>
                </ul>
                {/* Segundo filtro por modelo */}
                <h3>Marca</h3>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" name="brand" value="amd" onChange={filterCategory} checked={selectedCheckboxes['amd'] || false}  />
                            AMD
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="brand" value="nvidia" onChange={filterCategory} checked={selectedCheckboxes['nvidia'] || false} />
                            Nvidia
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="brand" value="corsair" onChange={filterCategory} checked={selectedCheckboxes['corsair'] || false} />
                            Corsair
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="brand" value="intel" onChange={filterCategory} checked={selectedCheckboxes['intel'] || false} />
                            Intel
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="brand" value="adata" onChange={filterCategory} checked={selectedCheckboxes['adata'] || false} />
                            Adata
                        </label>
                    </li>
                </ul>
            </div>


            <div>
                <h3>Precio</h3>
                <input type="range" min="0" max="1000" step="10" value="900" id="precio-slider" />
                <span id="precio-value">$50</span>

            </div>
        </div>
    )
}

export default FiltersMenu