import React from "react";
import useServices from "../../utilities/useServices";

const Services = () => {
  const [services] = useServices();
  console.log(services);
  return (
    <>
      <section>
        <h2 className="text-2xl lg:text-4xl font-semibold border-b-4 border-b-green-800 w-fit mx-auto rounded-sm text-gray-800">
          Services
        </h2>
      </section>
      <section>cards</section>
    </>
  );
};

export default Services;
