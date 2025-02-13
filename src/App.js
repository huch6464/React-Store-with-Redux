
import React from 'react';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import './App.css';
import Products from './components/products';
import Cart from './components/Cart';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Router>

    <Routes>
        <Route path='/' Component={Products}/>
        <Route path='/cart'  Component={Cart}/>
    </Routes>

  </Router>
  </>
  );
}

export default App;
