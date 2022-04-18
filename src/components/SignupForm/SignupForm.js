import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const SignupForm = () => {
  const [passwordInput, setPasswordInput] = useState({ value: "" });
  const [confirmPassword, setConfirmPassword] = useState({ error: "" });

  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);

  let errorElement;
  if (error) {
    errorElement = <p className="text-red-700">{error?.message}</p>;
  }

  const handlePassword = (event) => {
    const password = event.target.value;
    setPasswordInput({ value: password });
  };

  const handleConfirmPassword = (event) => {
    const confirmPassword = event.target.value;
    if (confirmPassword === passwordInput.value) {
      setConfirmPassword({ error: "" });
    } else {
      setConfirmPassword({ error: "Password not matched" });
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (confirmPassword.error) {
      toast.error("Password not matched", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast.success("Verification email sent", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="p-4 border border-orange-600 shadow-xl w-fit mx-auto rounded my-10">
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
                  className="px-4 py-2 border border-gray-400 focus:border-orange-600 outline-none rounded"
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
                  className="px-4 py-2 border border-gray-400 focus:border-orange-600 outline-none rounded"
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
                  onBlur={handlePassword}
                  className="px-4 py-2 border border-gray-400 focus:border-orange-600 outline-none rounded"
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
                  onBlur={handleConfirmPassword}
                  className="px-4 py-2 border border-gray-400 focus:border-orange-600 outline-none rounded"
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  required
                />
                <p className="text-red-700">{confirmPassword?.error}</p>
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
            <div>{errorElement}</div>
            <div className="flex items-center">
              <input
                onClick={() => setAgree(!agree)}
                className="h-5 w-5 accent-green-800 rounded mx-2"
                type="checkbox"
                name="check"
                id="agree"
              />
              <label className="text-md text-slate-500" htmlFor="agree">
                I agree with terms & conditions
              </label>
            </div>
            <div>
              <button
                disabled={!agree}
                className={`${
                  !agree
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-green-800 hover:bg-orange-600 cursor-pointer"
                } text-white px-5 py-2 font-bold  rounded hover:shadow-md shadow-none my-2`}
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
