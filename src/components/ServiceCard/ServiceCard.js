import React from "react";

const ServiceCard = ({ service }) => {
  const { name } = service;
  return (
    <>
      <div>
        <p>{name}</p>
      </div>
    </>
  );
};

export default ServiceCard;
