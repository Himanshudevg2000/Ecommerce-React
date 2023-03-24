import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Home/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
