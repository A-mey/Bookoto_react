import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <div>
      <Navbar />
      
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path="product" element = {<Product/>} />
        </Routes>
        
      </BrowserRouter>  
    </div>
  );
}

export default App;
