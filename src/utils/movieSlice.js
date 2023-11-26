import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    trailerMovie: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    backgroundTrailer: (state, action) => {
      state.trailerMovie = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addNowPlayingMovie, backgroundTrailer } = movieSlice.actions;
