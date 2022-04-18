import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Navbar from "../Navbar/Navbar";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <header className="bg-white px-5 py-2 flex flex-row justify-between items-center shadow-md">
        <section>
          <h1 className="text-green-800 text-xl lg:text-3xl font-serif font-bold">
            NutriFix
          </h1>
        </section>
        <section className="flex flex-row-reverse lg:flex-row justify-evenly items-center">
          <Navbar></Navbar>
          <div>
            {!user ? (
              <Link
                to="/login"
                className="mx-5 lg:mx-0 bg-green-800 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-md text-md lg:text-xl"
              >
                Login
              </Link>
            ) : (
              <Link
                onClick={() => signOut(auth)}
                to="/login"
                className="mx-5 lg:mx-0 bg-green-800 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-md text-md lg:text-xl"
              >
                Logout
              </Link>
            )}
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
