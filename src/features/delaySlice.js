import { createSlice } from "@reduxjs/toolkit";

// max value is 2000
// min value is 1
const initialState = {
  value: 100,
};

export const delaySlice = createSlice({
  name: "delay",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value === 100) {
        state.value += 400;
      } else if (state.value >= 500 && state.value < 2000) {
        state.value += 500;
      } else if (state.value === 2000) {
        state.value = 2000;
      } else if (state.value === 5) {
        state.value += 5;
      } else if (state.value < 100) {
        state.value += 10;
      }
    },
    decrement: (state) => {
      if (state.value === 10) {
        state.value -= 5;
      } else if (state.value === 5) {
        state.value = 5;
      } else if (state.value <= 100) {
        state.value -= 10;
      } else if (state.value === 500) {
        state.value -= 400;
      } else {
        state.value -= 500;
      }
    },
  },
});

export const { increment, decrement } = delaySlice.actions;

export default delaySlice.reducer;
