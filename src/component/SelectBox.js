import React from "react";

const SelectBox = (props) => {
  let optionsName = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="mt-5 w-full bg-gray-700 sm:mt-0 sm:max-w-xs rounded-lg overflow-hidden relative ml-0 sm:ml-4">
      <select
        aria-label="Filter by the country"
        onChange={(e) => props.selectHandler(e.target.value.toLowerCase())}
        className="w-full py-3 px-4 appearance-none bg-gray-100   text-gray-500 focus:outline-none"
      >
        <option value="" className="hidden text-gray-300">
          Filter by the country
        </option>
        {optionsName.map((country, index) => {
          return (
            <option
              className="font-normal text-lg text-gray-800 "
              key={index}
              value={country.toLowerCase()}
            >
              {country === "Americas" ? (country = "America") : country}
            </option>
          );
        })}
      </select>
      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-700 stroke-2"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
        </svg>
      </span>
    </div>
  );
};

export default SelectBox;

// class SelectBox extends Component {
//   state = {
//     options: ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"],
//   };

//   render() {
//     return (
// <div className="mt-5 w-full bg-gray-700 sm:mt-0 sm:max-w-xs rounded-lg overflow-hidden relative ml-0 sm:ml-4">
//   <select
//     onChange={(e)=> this.props.selectHandler(e.target.value) }
//     className="w-full py-3 px-4 appearance-none bg-gray-100   text-gray-500 focus:outline-none"
//   >
//     <option value="" className="hidden text-gray-300">
//       Filter by the country
//     </option>
//     {this.state.options.map((country, index) => {
//       return (
//         <option
//           className="font-normal text-lg text-gray-800 "
//           key={index}
//           value={country.toLowerCase()}
//         >
//           {country==="Americas"?country="America":country}
//         </option>
//       );
//     })}
//   </select>
//   <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//     <svg
//       className="h-5 w-5 text-gray-700 stroke-2"
//       viewBox="0 0 20 20"
//       fill="none"
//       stroke="currentColor"
//     >
//       <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
//     </svg>
//   </span>
// </div>
//     );
//   }
// }
