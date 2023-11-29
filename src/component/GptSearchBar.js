import React from "react";
import { BACKGROUND_IMAGE } from "../utils/constant";

const GptSearchBar = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img src={BACKGROUND_IMAGE} alt="netflix-background" />
        <div className="bg-gradient-to-b from-black w-full h-4/5 absolute top-0" />
      </div>
      <div className="pt-44 flex justify-center">
        <div className="bg-black w-1/2 px-4 py-2">
          <form className="grid grid-cols-12">
            <input
              type="text"
              placeholder="What would you like to watch today?"
              className="mx-1 mr-4 my-1 col-span-9 px-4 py-2 rounded-md"
              value=""
            />
            <button className="bg-red-600 text-white col-span-3 mx-1 my-1 ml-4 rounded-md">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default GptSearchBar;
