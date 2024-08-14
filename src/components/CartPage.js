import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeItem } from '../slices/cart/cartSlice';

const CartPage = () => {

    //destructure data
    const { cartList, totalQuantity, totalPrice } = useSelector((state) => {  //here cartList is our initialState which define at cartSlices as a initialstate
        return state.shoppingCart  //here define only shoppingacart because that includes all above destructure propery
        //here state is a parameter and shoppingCart come from GlobalStore where define at root reducer object 
    })

    //dispatch give order to action for do work as per instuctions 
    //dispatch trigger the action
    const dispatch = useDispatch()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                {
                    cartList && cartList.map((curItem) => {
                        return <div key={curItem.id} className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4">
                            <img className="w-20 h-20 rounded-lg" src={curItem.productImg} />
                            <div className="ml-4 flex-grow">
                                <div className="font-bold text-lg">{curItem.productName}</div>
                                <div className="text-gray-700">Price: <span className='font-bold text-lg'>{curItem.price}</span></div>
                                <button
                                    //when user click on remove button -> dispatch call and give order to action and ->  
                                    onClick={() => dispatch(removeItem(curItem.id))}
                                    className="px-4 py-2 bg-red-500 text-white rounded" >Remove</button>
                            </div>

                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => dispatch(removeItem(curItem.id))}
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    -
                                </button>
                                <span className="text-lg">{curItem.quantity}</span>
                                <button
                                    onClick={() => dispatch(addToCart(curItem))}
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>

            <div className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md mt-3">
                <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
                <div className="mb-2">
                    <span className="font-semibold">Total Quantity:</span> {totalQuantity}
                </div>
                <div className="mb-2">
                 <div className="text-xl font-bold">Total Amount: ${totalPrice.toFixed(2)}</div> {/* toFixed define last two zero .00 */}
                </div>
            </div>

            <Link to='/'>
                <button className='bg-green-500 text-white font-bold px-5 py-2 rounded-md mt-5'>Continue Shopping</button>
            </Link>

        </div>
    );
}

export default CartPage;
