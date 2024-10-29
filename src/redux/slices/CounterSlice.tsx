import { createSlice } from "@reduxjs/toolkit";


const CounterSlice=createSlice({
    name:"counterSlice",
    initialState:{counter:0},
    reducers:{
        increment:(state)=>{
            state.counter++;
        },
        decrement:(state)=>{
            state.counter--;
        },
        incrementByAmout:(state,action)=>{
            state.counter+=Number(action.payload);
        },
        decrementByAmout:(state,action)=>{
            state.counter-=Number(action.payload);
        },
        reset:(state)=>{
            state.counter=0;
        }

    }
})

export const {increment,decrement,incrementByAmout,reset,decrementByAmout}=CounterSlice.actions;

export default CounterSlice.reducer