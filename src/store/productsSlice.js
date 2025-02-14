import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


 
export const fetchData =
createAsyncThunk('products/fetchData',
    async ()=>{
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data;
    }
    )


  export const productsSlice = createSlice({
    name: 'productsName',

    initialState:{
        productsList:[],
        status: 'idle',
        error: null,
        cartList: []
    },

    reducers:{
        ADD_TO_CART:(state,action)=>{
            const item = state.cartList.find(item=>item.id === action.payload.id)
            if(!item){
                state.cartList.push({...action.payload,quantity : 1})
            }else{
                item.quantity += 1
            } 
     },
        REMOVE_FROM_CART:(state,action)=>{
            state.cartList  =  state.cartList.filter((item)=>item.id !== action.payload.id)
          
        },
        DECREMENT_QUANTITY:(state,action)=>{
            const item = state.cartList.find(item=>item.id === action.payload.id)
            if(item.quantity >1){
                item.quantity -=1
            }else if(item.quantity === 1){
              state.cartList  =  state.cartList.filter((item)=>item.id !== action.payload.id)
            }
            }
    },

    extraReducers:(builder)=>{
        builder
            .addCase(fetchData.pending,(state)=>{state.status = 'loading'})
            .addCase(fetchData.fulfilled,(state,action)=>{
                state.status = 'succeeded';
                state.productsList = action.payload;
            })
            .addCase(fetchData.rejected,(state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
    
 } )

export const {ADD_TO_CART,REMOVE_FROM_CART,DECREMENT_QUANTITY} = productsSlice.actions
export default productsSlice.reducer;