import React from "react";

const VedioTitle = ({ overview, original_title }) => {
  return (
    <div className="m-10">
      <h1 className="text-5xl">{original_title}</h1>
      <p className="mt-6 w-1/2">{overview}</p>
      <div className="flex flex-start items-center py-6">
        <button className="bg-white text-black px-2 py-1 rounded-md">
          ▶️ Play
        </button>
        <button className="bg-gray-400 px-5 py-3 rounded-md text-white mx-5">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
