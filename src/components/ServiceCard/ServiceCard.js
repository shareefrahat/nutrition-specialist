import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { name, img, description } = service;
  const navigate = useNavigate("");

  return (
    <>
      <div
        onClick={() => navigate("/checkout")}
        className="shadow-md bg-white mx-auto w-fit rounded-md p-4 border-2
      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300
      "
      >
        <div>
          <img
            className="w-[200px] md:w-[300px] mx-auto rounded-md"
            src={img}
            alt=""
          />
        </div>
        <div>
          <p className="text-lg md:text-xl font-semibold py-3">{name}</p>
        </div>
        <div>
          <p className="w-[200px] md:w-[300px] mx-auto text-justify text-lg">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
