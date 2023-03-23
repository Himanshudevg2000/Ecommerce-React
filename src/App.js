import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
