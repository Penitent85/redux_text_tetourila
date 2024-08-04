import { createSlice } from "@reduxjs/toolkit";

// create slice => obj -> slice (reducer ,action, initialState)
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    reset: (state) => {
      state.counter = 0;
    },
    increment5: (state) => {
      state.counter += 5;
    },
    decrement5: (state) => {
      state.counter -= 5;
    },
    incrementByValue: (state, action) => {
      state.counter += action.payload;
    },
    // add more reducers here as needed
  },
});

export const {
  increment,
  decrement,
  reset,
  increment5,
  decrement5,
  incrementByValue,
} = counterSlice.actions;

export default counterSlice.reducer;
