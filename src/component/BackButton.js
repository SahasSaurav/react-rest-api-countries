import React from 'react';


const BackButton = (props) => {
  return (
    <button className="inline-flex jusitify-center items-center mt-6 mb-10 px-4 py-2  bg-gray-800 text-white text-sm  sm:text-lg sm:font-medium transition-opacity duration-300 ease-out rounded hover:opacity-75 focus:outline-none">
      <svg  className="w-6 mr-2" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
      <path className="text-white  stroke-current" d="M7 16L3 12M3 12L7 8M3 12L21 12"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="font-medium">{props.name}</span>
    </button>
  )
}

export default BackButton;
