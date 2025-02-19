
import React from 'react';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import './App.css';
import Products from './components/products';
import Cart from './components/Cart';
import AboutUs from './pages/AboutUs';



function App() {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart'  element={<Cart/>}/>
        <Route path='/about' element={<AboutUs/>}/>
    </Routes>
  </Router>
  );
}

export default App;
