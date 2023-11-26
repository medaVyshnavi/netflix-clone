import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryComponent = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovie);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovie);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovie);
  return (
    <div className="bg-black">
      <div className="-mt-52 z-10 relative">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryComponent;
