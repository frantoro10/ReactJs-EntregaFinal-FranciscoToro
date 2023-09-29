import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// firebase
import {collection,getDocs,getFirestore} from 'firebase/firestore';
// axios
// import axios from "axios"
// componentes
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

// function getProducts() {
//   return axios.get("https://dummyjson.com/products")
// }

// UseParams


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const productsCollection = collection(db, "products");
        const snapshot = await getDocs(productsCollection);

        // Convierte el resultado de snapshot a un array de objetos
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Filtra los productos por la categoría
        const dataFiltered = data.filter((item) => item.category === categoryId);

        setProducts(dataFiltered);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setLoading(false); // Asegúrate de manejar los errores adecuadamente
      }
    };

    fetchData();
  }, [categoryId]);

  return loading ? <div>Loading...</div> : <ItemListContainer productsData={products} />;
};

export default Home


// const Category = () => {
//   const { categoryId } = useParams()
//   const category = ProductsData.filter(product => product.category === categoryId)
//   console.log(category)
  
//   if (category.length === 0) {
//     return (
//       <div>
//         <p>No se encontraron productos en esta categoría.</p>
//       </div>
//     );
//   }

//   return (
//     <ItemListContainer productsData={category} />
//   );
// }

// export default Category