import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/banner.jpg";
const TopBanner = () => {
  return (
    <>
      <div>
        <section
          style={{
            backgroundImage: `url(${banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="bg-cover h-[200px] w-full md:h-[800px] flex justify-center items-center"
        >
          <div className="flex flex-col justify-center">
            <div
              style={{ textShadow: "2px 0.5px black" }}
              className="text-2xl md:text-7xl text-white px-5 mb-4 lg:mb-20 font-sans pt-5"
            >
              <p className="mb-0 lg:mb-10">A healthy body,</p>
              <p>A healthy mind!</p>
            </div>
            <p
              style={{ textShadow: "2px 0.5px black" }}
              className=" text-md lg:text-4xl w-56 lg:w-full text-white font-serif"
            >
              I can help you to maintain nutrition in your body
            </p>
            <Link
              to="/checkout"
              className="px-2 lg:px-4 py-1 lg:py-2 bg-green-800 text-white text-md lg:text-2xl rounded-md shadow-xl w-fit mx-auto my-4 lg:my-8 hover:bg-orange-600 border-2 border-white"
            >
              Book A Session
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default TopBanner;
