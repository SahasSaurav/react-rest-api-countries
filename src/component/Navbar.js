import React from "react";
import { Link } from "react-router-dom";

function svgLogoStyle(dark) {
  let classes = [
    "transform",
    "scale-75",
    "sm:scale-100",
    "w-6",
    "h-6",
    "stroke-2",
    "stroke-current",
    "mr-1",
  ];
  dark ? classes.push("fill-current") : classes.push("");
  return classes.join(" ").trim();
}

const Navbar = (props) => {
  return (
    <nav className="sticky top-0 left-0 z-40 bg-gray-800 shadow-inner p">
      <div className="container mx-auto overflow-hiddden flex justify-between items-center flex-wrap sm:flex-no-wrap p-4">
        <Link to="/">
          <h2 className="text-xl tracking-wider sm:text-3xl text-white font-bold sm:font-semibold ">
            Where in the world?
          </h2>
        </Link>
        <button className="inline-flex jusitify-center items-center text-white text-sm transform scale-90 sm:scale-100  sm:text-lg sm:font-medium p-2 border-2 border-gray-100 transition-colors duration-300 ease-out rounded hover:bg-gray-100 hover:text-gray-800 focus:outline-none">
          <svg
            className={svgLogoStyle(props.darkMode)}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <span>Dark Mode</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
