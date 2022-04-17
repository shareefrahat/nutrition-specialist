import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const SignupForm = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/");
  };

  return (
    <>
      <div className="p-4 border border-green-800 shadow-xl w-fit mx-auto rounded my-10">
        <form onSubmit={handleSignup}>
          <div className="flex justify-between items-center border border-green-800 rounded  mb-8">
            <div className="bg-white  w-full text-lg py-2 hover:text-green-800 rounded">
              <Link to="/login">Login</Link>
            </div>
            <div className="bg-green-800 text-white w-full text-lg py-2 rounded">
              <Link to="/signup">Signup</Link>
            </div>
          </div>
          <div className="text-left flex flex-col gap-4 justify-center items-center px-2 md:px-6 text-lg">
            <div>
              <label htmlFor="user-name">Name:</label>
              <div>
                <input
                  className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded"
                  type="text"
                  name="name"
                  id="user-name"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="user-email">Email:</label>
              <div>
                <input
                  className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded"
                  type="email"
                  name="email"
                  id="user-email"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="user-password">Password:</label>
              <div>
                <input
                  className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded"
                  type="password"
                  name="password"
                  id="user-password"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirm-password">Confirm Password:</label>
              <div>
                <input
                  className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded"
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  required
                />
              </div>
            </div>
            <div>
              <span className="text-md text-slate-500">
                Already have an account?
              </span>
              <Link to="/login" className="text-md text-blue-700 mx-2">
                Login
              </Link>
            </div>
            <div>
              <button
                className="bg-yellow-400 text-slate-900 px-5 py-2 font-bold  rounded hover:shadow-md shadow-none my-2"
                type="submit"
              >
                Sign Up
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

export default SignupForm;
