import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCart } from '../slices/product/productSlice';
import { addToCart } from '../slices/cart/cartSlice';
import Spinner from '../components/Spinner'

const ProductCard = () => {

  //get data from our global store (redux store) (useSelector hook work like  useContext hook which through we can access context api data)
  const list = useSelector((state) => {
    return state.productList.productCart
    //here state is a parameter and productList come from GlobalStore where define at root reducer object  and productCart come from productSlice where define as a empty array
  })  //now our initialState is list 
  // console.log(list);

  const isLoading = useSelector((state) => {
    return state.productList.isLoading
  })


  //dispatch give order to action for do work as per instuctions 
  //dispatch trigger the action
  const dispatch = useDispatch()

  const navigate = useNavigate()

  //when app first time render all product display in product page
  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch])

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* if products are loaded then display spinner otherwise display all products */}
          {isLoading ? <Spinner /> :

            (list.map((curItem) => {
              return <div key={(curItem.id)} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full" src={curItem.productImg} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{curItem.productName}</div>
                  <p className="text-gray-700 text-base">Quantity: {curItem.quantity}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="text-gray-900 font-bold">Price: {curItem.price}</span>
                  <button
                    //when user click on add to cart button -> dispatch call and give order to action and -> action and action.push add user's product into product cart
                    onClick={() =>
                      dispatch(addToCart(curItem),
                        navigate('/cart'),
                        console.log("hit", curItem.id)
                      )}
                    className='bg-green-500 font-bold text-white px-5 py-1 rounded-md mt-3'>Add to Cart</button>
                </div>
              </div>
            }))

          }
        </div>
      </div>
    </>
  );
}

export default ProductCard;
