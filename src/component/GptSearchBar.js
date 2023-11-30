import React from "react";
import { BACKGROUND_IMAGE } from "../utils/constant";
import { langConstants } from "../utils/langConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const selector = useSelector((store) => store.config.lang);
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
              placeholder={langConstants[selector].gptSuggestion}
              className="mx-1 mr-4 my-1 col-span-9 px-4 py-2 rounded-md text-black"
            />
            <button className="bg-red-600 text-white col-span-3 mx-1 my-1 ml-4 rounded-md">
              {langConstants[selector].search}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default GptSearchBar;
