import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const LoginForm = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  return (
    <>
      <div className="p-4 border border-green-800 shadow-xl w-fit mx-auto rounded my-10">
        <form onSubmit={handleLogin}>
          <div className="flex justify-between items-center border border-green-800 rounded  mb-8">
            <div className=" bg-green-800 text-white w-full text-lg py-2 rounded">
              <Link to="/login">Login</Link>
            </div>
            <div className=" bg-white  w-full text-lg py-2 hover:text-green-800 rounded">
              <Link to="/signup">Signup</Link>
            </div>
          </div>
          <div className="text-left flex flex-col gap-4 justify-center items-center px-2 md:px-6 text-lg">
            <div>
              <label htmlFor="user-email">Email:</label>
              <p>
                <input
                  className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded"
                  ref={emailRef}
                  type="email"
                  name="email"
                  id="user-email"
                  required
                />
              </p>
            </div>
            <div>
              <label htmlFor="user-password">Password:</label>
              <p>
                <input
                  className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded"
                  ref={passwordRef}
                  type="password"
                  name="password"
                  id="user-password"
                  required
                />
              </p>
            </div>
            <div>
              <span className="text-md text-slate-500">
                Don't have an account?
              </span>
              <Link to="/signup" className="text-md text-blue-700 mx-2">
                Sign Up
              </Link>
            </div>
            <div>
              <button
                className="bg-yellow-400 text-slate-900 px-5 py-2 font-bold  rounded hover:shadow-md shadow-none my-2"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <div className="my-5">
          <div className="flex flex-row justify-center items-center">
            <div className="w-full bg-gray-400">
              <hr />
            </div>
            <span className="mx-2 text-gray-500 font-serif text-md md:text-lg">
              Or
            </span>
            <div className="w-full bg-gray-400">
              <hr />
            </div>
          </div>
          <div className="mt-4">
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
