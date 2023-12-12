import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Componentes
import Home from '../pages/Home'
import Products from '../pages/Products'
import Category from '../pages/Category'
import HeaderComponent from '../components/HeaderComponent/HeaderComponent'
import ItemDetails from '../pages/ItemDetails'
import CartPage from '../pages/CartPage'



const MainRouter = () => {

    const [username, setUserName] = useState('');

    const handleLogin = (newUsername) => {
        setUserName(newUsername);
    };

    return (
        <Router>
        
            <HeaderComponent username={username} onLogin={handleLogin}/>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />}/>
                <Route path="/category/:categoryId" element={<Category />} />
                <Route path="/item/:productId" element={<ItemDetails />} />
                <Route path="/shoppingCart" element={<CartPage/>} />
            </Routes>
        </Router>
    )
}

export default MainRouter