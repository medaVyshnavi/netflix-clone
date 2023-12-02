import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt",
  initialState: {
    isGPT: false,
    gptMovies: null,
    query: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.isGPT = !state.isGPT;
    },
    addGPTMovies: (state, action) => {
      state.gptMovies = action.payload;
    },
    searchMovies: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGPTMovies, searchMovies } =
  gptSlice.actions;
export default gptSlice.reducer;
