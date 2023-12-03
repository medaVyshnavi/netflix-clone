import { useEffect } from "react";
import { addTopRatedMovie } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";

export const useTopRated = () => {
  const dispatch = useDispatch();

  const topRatedMovie = useSelector((store) => store.movies.topRatedMovie);

  const movies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      OPTIONS
    );
    const data = await response.json();
    dispatch(addTopRatedMovie(data.results));
  };

  useEffect(() => {
    !topRatedMovie && movies();
  });
};
