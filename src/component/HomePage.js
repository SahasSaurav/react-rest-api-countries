import React from "react";
import SearchBar from "./SearchBar";
import Countries from "./Countries";
import Select from "./SelectBox";
import Loader from "./Loader";

const HomePage = (props) => {
  return (
    <main>
      <div className=" container mx-auto p-4 ">
        <div className="flex flex-col sm:flex-row justify-between items-baseline mt-8 mb-4">
          <SearchBar searchHandler={props.search} />
          <Select className="sm:mt-6" selectHandler={props.select} />
        </div>
      </div>
      {!props.isLoading ? (
        <Countries countries={props.countries} />
      ) : (
        <Loader task="Fetching" />
      )}
      { props.match===true && (<h2 className="flex justify-center items-center text-3xl text-white font-medium">No matching results were found...</h2>) }
    </main>
    
  );
};

export default HomePage;
