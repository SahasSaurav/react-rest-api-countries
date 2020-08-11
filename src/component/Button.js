import React from 'react';

const Button = (props) => {
  return (
   <button className="inline-flex jusitify-center items-center px-4 py-2 m-2  bg-gray-800 text-white text-sm  sm:text-lg sm:font-medium transition-opacity duration-300 ease-out rounded hover:opacity-75 focus:outline-none">
     {props.label}
   </button>
  )
}

export default Button;
