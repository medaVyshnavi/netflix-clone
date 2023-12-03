import { useEffect } from "react";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const movies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      OPTIONS
    );
    const data = await response.json();
    dispatch(addNowPlayingMovie(data.results));
  };

  useEffect(() => {
    !nowPlayingMovies && movies();
  });
};
