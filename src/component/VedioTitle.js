import React from "react";

const VedioTitle = ({ overview, original_title }) => {
  return (
    <div className="p-10 absolute top-0 pt-[20%] text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-5xl">{original_title}</h1>
      <p className="mt-6 w-1/3">{overview}</p>
      <div className="flex flex-start items-center py-6">
        <button className="bg-white text-black px-5 py-3 rounded-md mx-5">
          ▶️ Play
        </button>
        <button className="bg-gray-400 px-5 py-3 rounded-md text-white mx-5">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
