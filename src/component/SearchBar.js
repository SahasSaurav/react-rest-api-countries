import React from "react";

const SearchBar = (props) => {
  return (
    <div className="flex justify-start items-center bg-gray-300 rounded-lg overflow-hidden w-full sm:max-w-xs mr-0 sm:mr-4">
      <svg
        className="inline-block w-6 h-6 text-transparent fill-current mx-2 my-auto stroke-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          stroke="#4A5568"
        />
      </svg>
      <input aria-label="Search for a country"
        onChange={(e) => props.searchHandler(e.target.value)}
        className="inline-block w-full sm:max-w-full px-2 py-3 bg-gray-100 placeholder-gray-500   focus:outline-none"
        type="text"
        id="search"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchBar;
