import React from "react";

const Details = (props) => {
  return (
    <h3 className="text-gray-100 mb-1">
      <span className="font-medium mr-1">{props.title}:</span>
      <span>{props.value}</span>
    </h3>
  );
};

export default Details;
