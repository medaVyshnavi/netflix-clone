import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { backgroundTrailer } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constant";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const fetchVedio = async () => {
    const vedioList = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      OPTIONS
    );
    const data = await vedioList.json();
    const movieTrailer = data.results.filter(
      (vedio) => vedio.type === "Trailer"
    );
    const vedio = movieTrailer.length ? movieTrailer[0] : data.results[0];
    dispatch(backgroundTrailer(vedio.key));
  };

  useEffect(() => {
    fetchVedio();
  }, []);
};

export default useMovieTrailer;
