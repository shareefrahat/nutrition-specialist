import React from "react";
import sharifImg from "../../images/sharif.jpg";

const About = () => {
  return (
    <div>
      <section className="mt-5 mb-10">
        <h3 className="text-xl lg:text-2xl font-semibold border-b-4 border-b-orange-600 w-fit mx-auto rounded-sm text-green-800">
          About Me
        </h3>
      </section>
      <section>
        <div className="my-10 px-10">
          <div>
            <img
              className="w-[150px] mx-auto rounded-md border-2 border-green-800"
              src={sharifImg}
              alt=""
            />
          </div>
          <div>
            <h4 className="text-lg lg:text-2xl font-semibold text-slate-800 my-4 font-serif">
              Mohammad Sharif Uddin
            </h4>
          </div>
          <div>
            <p className="lg:w-[500px] text-justify mx-auto mb-4 mt-6 font-serif text-md lg:text-xl">
              I’m Sharif, graduate Textile Engineer. Although I’m a Textile
              Engineer but I have a great passion for web development. That’s
              why I want to be a full stack web developer.
            </p>

            <p className="lg:w-[500px] text-justify mx-auto font-serif text-md lg:text-xl">
              To reach my goal I want to learn both frontend and backend
              development. Since Last four months I have learnt some techs &
              stuff about frontend development. So, now I want to learn about
              backend development. That’s why I want to be committed for next
              two months to doing hard work and also want to spend my time in
              learning so that I can achieve my goal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
