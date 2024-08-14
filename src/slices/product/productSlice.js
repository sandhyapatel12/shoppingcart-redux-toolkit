import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//create thunk -- createAsyncThunk takes 2 arguments first "name" and second callback function
export const fetchCart = createAsyncThunk('fetchCart', async () => {

    //fetch data from fake api
    const response = await fetch('https://mocki.io/v1/8ab78eae-135b-4f23-8f5c-be0ead5576c1');  //here axios can't work
    // console.log("response is",response);  //when we fetch api then display console
    try {
        // console.log(response);
        return response.json();   //converted getted data into json format and then return
    } catch (error) {
        console.log(error);
    }
});

// CreateSlice automatically generates action creators and action types that according to the reducers and state
//CreateSlice function  value store in key value pair
const productSlice = createSlice({
    name: "product",
    initialState: {
        productCart: [],
        isLoading: false,
        isError: false,
    },

    //give here all reducers which use for fetch product from api
    reducers: {},
    // //when we want to perform any Asynchronous work or cross-slice commnucation like (work with api) then use extraReducers
    extraReducers: (builder) => {    //builder handle api all states using builder (here builder pass as an argument)

        //----------------------------------------------------------------------CREATE user-------------------------------------------------------------------------------------

        //when we call api first time at that time api is in pending state
        builder.addCase(fetchCart.pending, (state, action) => {  //createUser is our thunk define at above create user
            state.isLoading = true;
        })

        //when fetch data successfully then api is in fulfilled state
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.isLoading = false;

            //push method add new user data to end of array (here push work safely means without touch pre added data(pre added data stay as it is like ...state))
            state.productCart = action.payload;  //action.payload includes user data
            // createUser (which is our thunk which define at above) start api and then pending state is activeted and then fullfilled state then store user data into userData: [] using push method
        })
        //when occur error to fetching data at that time api is in  rejected  state
        builder.addCase(fetchCart.rejected, (state, action) => {
            state.isError = true;
            console.log('Error', action.payload);
        })
    }
})

export default productSlice;

