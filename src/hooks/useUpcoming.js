import { useEffect } from "react";
import { addUpcomingMovie } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";

export const useUpcoming = () => {
  const dispatch = useDispatch();
  const upcomingMovie = useSelector((store) => store.movies.upcomingMovie);

  const movies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      OPTIONS
    );
    const data = await response.json();
    dispatch(addUpcomingMovie(data.results));
  };

  useEffect(() => {
    !upcomingMovie && movies();
  });
};
