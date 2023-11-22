import React from "react";
import { useSelector } from "react-redux";
import VedioBackground from "./VedioBackground";
import VedioTitle from "./VedioTitle";

const PrimaryComponent = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!moviesList) return;
  const movieBackground = moviesList[0];

  const { original_title, overview, id } = movieBackground;
  return (
    <div>
      <VedioBackground id={id} />
      <VedioTitle original_title={original_title} overview={overview} />
    </div>
  );
};

export default PrimaryComponent;
