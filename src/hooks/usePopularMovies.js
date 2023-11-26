import { useEffect } from "react";
import { addPopularMovie } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  const movies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      OPTIONS
    );
    const data = await response.json();
    dispatch(addPopularMovie(data.results));
  };

  useEffect(() => {
    movies();
  });
};
