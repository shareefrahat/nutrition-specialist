import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
      <header className="bg-white px-5 py-2 flex flex-row justify-between items-center shadow-md">
        <section>
          <h1 className="text-green-800 text-xl lg:text-3xl font-serif font-bold">
            Nutrition Specialist
          </h1>
        </section>
        <section className="flex flex-row-reverse lg:flex-row justify-evenly items-center">
          <Navbar></Navbar>
          <button className="mx-5 lg:mx-0 bg-green-800 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-md text-md lg:text-xl">
            Login
          </button>
        </section>
      </header>
    </>
  );
};

export default Header;
