import { useEffect } from "react";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const movies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        OPTIONS
      );
      const data = await response.json();
      dispatch(addNowPlayingMovie(data.results));
    };
    movies();
  });
};
