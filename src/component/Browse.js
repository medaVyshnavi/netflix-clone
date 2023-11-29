import React from "react";
import { useSelector } from "react-redux";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import PrimaryComponent from "./PrimaryComponent";
import SecondaryComponent from "./SecondaryComponent";
import { useTopRated } from "../hooks/useTopRated";
import { useUpcoming } from "../hooks/useUpcoming";
import GptSearch from "./GptSearch";
import Navbar from "./Navbar";

const Browse = () => {
  const isGpt = useSelector((store) => store.gpt.isGPT);
  console.log(isGpt, 99);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();

  return (
    <div className="text-white relative">
      <Navbar />
      {isGpt ? (
        <GptSearch />
      ) : (
        <div className="">
          <PrimaryComponent />
          <SecondaryComponent />
        </div>
      )}
    </div>
  );
};

export default Browse;
