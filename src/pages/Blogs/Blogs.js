import React from "react";
import Accordion from "../../components/Accordion/Accordion";

const Blogs = () => {
  return (
    <div>
      <section className="mt-5 mb-10">
        <h3 className="text-xl lg:text-2xl font-semibold border-b-4 border-b-orange-600 w-fit mx-auto rounded-sm text-green-800">
          My Blogs
        </h3>
      </section>
      <section className="px-5 my-10">
        <Accordion></Accordion>
      </section>
    </div>
  );
};

export default Blogs;
