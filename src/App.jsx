import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Store from './Components/Store';
import Header from './Components/Header';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer';
import CartProvider from './Store/CartProvider';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Movies from './Pages/Movies';
import ProductDetail from './Pages/ProductDetails';
import PrivateComponent from './Components/PrivateComponent/PrivateComponent';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import './App.css';

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    console.log("showcartHandler")
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };


  return (
    <CartProvider>
          <Header onShowCart={showCartHandler} />
          {showCart && <Cart onHideCart={hideCartHandler} />}
      <Routes>
        <Route element={<PrivateComponent />} >
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />} ></Route>
          <Route path="/store/products/:productId" element={<ProductDetail />} ></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>

        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login/>} />

      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
