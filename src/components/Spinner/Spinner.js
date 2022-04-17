import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="mt-20">
        <div
          className="
    spinner-border
    animate-spin
    inline-block
    w-8 lg:w-12
    h-8 lg:h-12
    border-4
    rounded-full
    text-green-800
  "
          role="status"
        ></div>
      </div>
    </>
  );
};

export default Spinner;
