import React from "react";
import googleLogo from "../../images/google.png";

const GoogleLogin = () => {
  return (
    <>
      <div className="mt-4">
        <button className="flex flex-row justify-center items-center border border-blue-600 rounded p-2 mx-auto shadow-lg">
          <img className="w-6 md:w-8 mx-2" src={googleLogo} alt="" />
          <p className="mx-2 font-serif text-md md:text-lg">
            Continue with Google
          </p>
        </button>
      </div>
    </>
  );
};

export default GoogleLogin;
