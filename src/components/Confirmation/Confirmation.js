import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";

const Confirmation = () => {
  return (
    <>
      <section className="my-10">
        <div className="lg:w-1/2 mx-auto p-5 flex flex-col justify-center">
          <div>
            <BadgeCheckIcon className="w-12 lg:w-24 text-green-800 mx-auto"></BadgeCheckIcon>
          </div>
          <div className="text-green-800 font-bold text-lg lg:text-4xl">
            Thank You!
          </div>
          <div>
            <p className="text-md lg:text-xl mt-5 text-gray-700">
              Will contact with you soon!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Confirmation;
