import React from "react";
import Details from "./Details";

const CountryCard = (props) => {
  return (
    <div className="country max-w-xs bg-gray-800 rounded-lg mx-auto sm:mx-0 cursor-pointer" style={{
      height:"375px",
      transform:"scale(1.1) translateY(100%) ",
      opacity:".25",
      transition:"opacity 350ms ease-out, transform  400ms ease-out",
      transitionDelay:"150ms"
    }}>
      <div className="h-full flex flex-col items-center  rounded-lg overflow-hidden">
        <div className="overflow-hidden">
          <img
            alt={`${props.name} flag`}
            className="img-lazy flex-shrink-0  w-full h-56 object-cover object-center transform hover:scale-110 transition-transform duration-150 ease-out "
            loading="lazy"
            src={props.flagImg}
          />
        </div>
        <div className="w-full bg-gray-800 px-4 py-3">
          <h2 className="country__name title-font font-semibold text-xl text-white mb-2">
            {props.name}
          </h2>
          <Details title="Population" value={props.population} />
          <Details title="Region" value={props.region} />
          <Details title="Capital" value={props.capital} />
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
