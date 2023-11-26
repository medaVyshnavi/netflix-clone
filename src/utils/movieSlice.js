import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovie: null,
    topRatedMovie: null,
    upcomingMovie: null,
    trailerMovie: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    backgroundTrailer: (state, action) => {
      state.trailerMovie = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  addNowPlayingMovie,
  backgroundTrailer,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
} = movieSlice.actions;
