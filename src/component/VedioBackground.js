import React, { useEffect } from "react";
import { OPTIONS } from "../utils/constant";

const VedioBackground = ({ id }) => {
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
  };

  useEffect(() => {
    fetchVedio();
  }, []);
  return (
    <div>
      <VedioBackground />
    </div>
  );
};

export default VedioBackground;
