import React from "react";
import feature1 from "../../images/feature1.jpg";
import feature2 from "../../images/feature2.jpg";

const Features = () => {
  return (
    <>
      <div className="my-10">
        <section className="flex flex-col lg:flex-row justify-center items-center px-10 my-20">
          <div>
            <img
              className="w-[250px] md:w-[400px] mx-auto rounded-md"
              src={feature1}
              alt=""
            />
          </div>
          <div className="mx-10">
            <h4 className="lg:text-left text-xl lg:text-4xl my-5 lg:w-[500px]  font-semibold">
              Individual Nutrition Counseling & Coaching
            </h4>
            <p className="text-justify  lg:w-[500px] text-md lg:text-xl text-gray-500 font-serif">
              Nutrition and lifestyle play a much bigger role in health,
              healing, and medicine than they get credit for! This is not about
              a fad or trend. It’s about a huge need infusing itself into the
              way we eat, exercise, sleep, work, age, and almost every other
              aspect of our lives.
            </p>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row-reverse justify-center items-center px-10 my-20">
          <div>
            <img
              className="w-[250px] md:w-[400px] mx-auto rounded-md"
              src={feature2}
              alt=""
            />
          </div>
          <div className="mx-10">
            <h4 className="lg:text-left text-xl lg:text-4xl my-5 lg:w-[500px] font-semibold">
              Fuel for the <br /> Marathon of Life
            </h4>
            <p className="text-justify  lg:w-[500px] text-md lg:text-xl text-gray-500 font-serif">
              Most people aren’t going to make change all by themselves. If they
              could, they would have already. They need the right systems, the
              right support, and the right accountability. With the right
              education you can provide this help that is so needed!
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;
