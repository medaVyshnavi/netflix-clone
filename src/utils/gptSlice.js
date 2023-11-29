import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt",
  initialState: {
    isGPT: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.isGPT = !state.isGPT;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
