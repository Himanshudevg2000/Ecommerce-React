import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Store from './Components/Store';
import Header from './Components/Header';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer';
import CartProvider from './Store/CartProvider';
import About from './Pages/About';
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
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;