import React from "react";
import Accordion from "../../components/Accordion/Accordion";

const Blogs = () => {
  return (
    <div>
      <section>
        <p>My blogs</p>
      </section>
      <section className="px-5 my-10">
        <Accordion></Accordion>
      </section>
    </div>
  );
};

export default Blogs;
