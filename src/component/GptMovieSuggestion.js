import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptMovies, query } = useSelector((store) => store.gpt);

  if (!gptMovies) return;

  return (
    <div>
      <div className="bg-black opacity-90 text-white mx-8 my-5">
        {query.map((movie, index) => (
          <MovieList title={movie} movies={gptMovies[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
