import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <footer className="bg-green-900 text-white p-5 text-md lg:text-xl font-serif mt-40">
        <p>&copy; Copyright {year} | Nutrition Specialist</p>
      </footer>
    </>
  );
};

export default Footer;
