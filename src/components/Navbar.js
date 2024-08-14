import React from 'react';
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
      const totalQuantity = useSelector((state) => {  //here totalQuantity is our initialState 
       return  state.shoppingCart.totalQuantity        //here state is a parameter and shoppingCart come from GlobalStore where define at root reducer object and totalQuantity is define as a initial state in cartSlice
    })
    
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          My Website
        </div>
        <ul className="flex space-x-4 items-center">
          <Link to="/" className="text-white hover:text-gray-400">All Products</Link>
          <Link to='/cart'><button className='bg-green-500 text-white px-5 py-2 rounded-md font-bold'>CART({totalQuantity})</button></Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
