import React, { useRef } from "react";
import { BACKGROUND_IMAGE, OPTIONS } from "../utils/constant";
import { langConstants } from "../utils/langConstants";
import { useSelector } from "react-redux";
import openAiKey from "../utils/openai";

const GptSearchBar = () => {
  const selector = useSelector((store) => store.config.lang);
  const inputRef = useRef(null);
  const dummyArray = [
    "Chalti Ka Naam Gaadi, Golmaal, Padosan, Andaz Apna Apna, Raja Babu",
  ];

  const movieList = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,
      OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleFetchResults = async () => {
    const searchQuery = `Give me 5 movie names of ${inputRef.current.value} comma separated in this format ["hello","chakde india","saptha sagara","bulbul","kgf"]`;
    const chatCompletion = await openAiKey.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });

    const recommededMovies = chatCompletion?.choices
      ? chatCompletion?.choices[0].message.content.split(",")
      : dummyArray;

    // console.log(recommededMovies, 222);

    // since its a async function it will take some time to fetch the results and returns a
    // PROMISE instead of results. array of promise are returned.
    const promiseArray = recommededMovies.map((item) => movieList(item));
    const value = await Promise.all(promiseArray);
    console.log(value);
  };

  return (
    <>
      <div className="absolute -z-10">
        <img src={BACKGROUND_IMAGE} alt="netflix-background" />
        <div className="bg-gradient-to-b from-black w-full h-4/5 absolute top-0" />
      </div>
      <div className="pt-44 flex justify-center">
        <div className="bg-black w-1/2 px-4 py-2">
          <form
            className="grid grid-cols-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder={langConstants[selector].gptSuggestion}
              className="mx-1 mr-4 my-1 col-span-9 px-4 py-2 rounded-md text-black"
            />
            <button
              className="bg-red-600 text-white col-span-3 mx-1 my-1 ml-4 rounded-md"
              onClick={handleFetchResults}
            >
              {langConstants[selector].search}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default GptSearchBar;
