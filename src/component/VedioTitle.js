import React from "react";

const VedioTitle = ({ overview, original_title }) => {
  return (
    <div>
      <h1>{original_title}</h1>
      <p>{overview}</p>
      <div className="flex flex-start items-center py-6">
        <button className="bg-white text-black px-2 py-1 rounded-md">
          Play
        </button>
        <button className="bg-gray-400 px-2 py-1 rounded-md">More Info</button>
      </div>
    </div>
  );
};

export default VedioTitle;
