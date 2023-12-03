import React from "react";
import { MOVIE_POSTER_CDN_LINK } from "../utils/constant";

const MovieCard = ({ movieItem }) => {
  if (!movieItem.poster_path) return null;
  return (
    <div className="m-3 w-36">
      <img
        src={`${MOVIE_POSTER_CDN_LINK}${movieItem.poster_path}`}
        alt={movieItem.original_title}
      />
    </div>
  );
};

export default MovieCard;
