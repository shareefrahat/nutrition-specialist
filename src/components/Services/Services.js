import React from "react";
import useServices from "../../hooks/useServices";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services] = useServices();

  return (
    <>
      <section>
        <h2 className="text-2xl lg:text-4xl font-semibold border-b-4 border-b-green-800 w-fit mx-auto rounded-sm text-gray-800">
          Services
        </h2>
      </section>
      <section>
        {!services ? (
          <div>loading</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-10">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service}></ServiceCard>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Services;
