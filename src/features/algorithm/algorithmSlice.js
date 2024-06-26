import { createSlice } from "@reduxjs/toolkit";

const sortingAlgorithms = [
  "Bubble Sort",
  "Heap Sort",
  "Insertion Sort",
  "Merge Sort",
  "Shell Sort",
  "Selection Sort",
  "Quick Sort",
];

const initialState = {
  value: sortingAlgorithms[3],
};

export const algorithmSlice = createSlice({
  name: "algorithm",
  initialState,
  reducers: {
    setAlgorithm: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAlgorithm } = algorithmSlice.actions;

export default algorithmSlice.reducer;
