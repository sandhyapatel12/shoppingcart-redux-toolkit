import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// CreateSlice automatically generates action creators and action types that according to the reducers and state
//CreateSlice function  value store in key value pair
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        totalQuantity: 0,
        totalPrice: 0,
    },

    //give here all reducers for cart page
    reducers:
    {
        //here is all action creators
        addToCart(state, action) {

            const newItem = action.payload;  //action.payload includes all products

            //if curId(which id hit by user) is match with newId id(which store action.payload(all id)) then perform following if else
            const existingItem = state.cartList.find((curId) => curId.id === newItem.id);

            //if item is already added in cart page then  increse quantity and price
            state.totalQuantity++;
            state.totalPrice += newItem.price;

            //if product is not exist already in shopping cart then add product using push
            if (!existingItem) {

                //push method add the item(which hit by user) end of cartList array (here push work safely means without touch pre added data(pre added data stay as it is like ...state))
                state.cartList.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    productImg: newItem.productImg
                });

            }
            //if product is  exist already in shopping cart then add quantity of that product
            else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        },


        removeItem(state, action) {

            const id = action.payload;  //action.payload includes all id

            //if curId(which id hit by user) is match with id(which store action.payload(all id)) then perform following if else
            const existingItem = state.cartList.find((curId) => curId.id === id);
            state.totalQuantity--;      //remove quantity of deleted product from (totalQuantity)
            state.totalPrice -= existingItem.price; //remove price of deleted product from (total Amount)

            //if quantity of existingItem is 1 then completely  remove  that product from cart
            if (existingItem.quantity === 1) {
                state.cartList = state.cartList.filter((curId) => curId.id !== id);
            }

            //otherwise remove one by one product quantity and price
            else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
    },

})

//export action Creators and destructure them from cartSlice.actions
export const { addToCart, removeItem } = cartSlice.actions;

export default cartSlice;

