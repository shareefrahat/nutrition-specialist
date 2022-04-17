import { ArrowLeftIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import emoji from "../../images/sadEmoji.gif";

const NotFound = () => {
  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        <h4 className="text-2xl text-red-600 font-bold">404 Wrong Gateway!</h4>
        <p className="text-xl">
          Sorry! the page
          <span className="text-red-600">
            {" "}
            "{window.location.pathname}"
          </span>{" "}
          does not exist.
        </p>
        <img className="mx-auto pb-3 w-40 mb-10" src={emoji} alt="" />
      </div>
      <div>
        <Link
          className="px-4 py-2 border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-violet-50 text-xl font-mono rounded "
          to="/"
        >
          Go Back <ArrowLeftIcon className="w-6 inline"></ArrowLeftIcon>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
