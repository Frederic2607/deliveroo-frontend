import React from "react";

const Introduction = ({ data }) => {
  return (
    <div>
      <h1>{data.restaurant.name}</h1>
      <p>{data.restaurant.description}</p>
      <img src={data.restaurant.picture} alt="restaurant" />
    </div>
  );
};

export default Introduction;
