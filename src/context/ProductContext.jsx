// import React, { createContext, useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'
// import { doc, getDoc, getFirestore } from 'firebase/firestore';

// export const ProductContext = createContext();

// export const SingleProductProvider = ({ children }) => {
//     const [product, setProduct] = useState({});
//     const [filterProduct, setFilterProduct] = useState([]);
//     const { productId } = useParams();

//     useEffect(() => {
//         const db = getFirestore();
//         const productItem = doc(db, "products", productId)
//         getDoc(productItem).then((snapshot) => { setProduct({ id: snapshot.id, ...snapshot.data() }) });
            

//     }, [productId]);

//     const initialContextValue = { product: {}, setProduct, filterProduct, setFilterProduct };


//     return (
//         <ProductContext.Provider value={initialContextValue}>
//             {children}
//         </ProductContext.Provider>
//     )

// }

