import React from 'react';
import Home from './Components/Home';
import Footer from './Components/Footer';
import CartProvider from './Store/CartProvider';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <Home/>
      <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
