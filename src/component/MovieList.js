import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div className="mx-5">
      <h1 className="text-xl pl-3">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((item) => (
            <MovieCard movieItem={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
