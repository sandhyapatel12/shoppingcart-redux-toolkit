import React from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<ProductCard />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>

      </Router>
    </>
  )
}

export default App