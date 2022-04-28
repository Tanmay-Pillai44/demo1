import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        currentCounter: 0
    },
    reducers: {
        increment: (state) => {
            state.currentCounter = state.currentCounter + 1;
        },
        decrement: (state) => {
            state.currentCounter = state.currentCounter - 1;
        },
        incrementByValue: (state, action) => {
            console.log( action.payload);
            state.currentCounter = state.currentCounter + action.payload;
        }
    }
});

const { increment, decrement, incrementByValue } = counterSlice.actions;

const selectCounter = (state) => state.counter.currentCounter;

export  {
    increment,
    decrement,
    incrementByValue,
    selectCounter,
}

export default counterSlice.reducer;