import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VedioBackground = ({ id }) => {
  const trailerKey = useSelector((store) => store.movies.trailerMovie);
  useMovieTrailer(id);

  return (
    <div>
      <iframe
        className="aspect-video w-screen"
        src={`https://www.youtube.com/embed/${trailerKey}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VedioBackground;
