import React, { useRef, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import Spinner from "../Spinner/Spinner";

const SignupForm = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  // const confirmPasswordRef = useRef("");
  const [confirmPassword, setConfirmPassword] = useState({ error: "" });

  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  let errorElement;
  // let passwordError;

  if (loading || updating) {
    return <Spinner></Spinner>;
  }

  if (error || updateError) {
    errorElement = (
      <p className="text-red-700">
        Error: {error?.message || updateError?.message}
      </p>
    );
  }

  const handleConfirmPassword = (e) => {
    const confirmPassword = e.target.value;

    if (confirmPassword === passwordRef.current.value) {
      console.log("password matched");
      setConfirmPassword({ error: "" });
    } else {
      setConfirmPassword({ error: "password not matched" });
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (confirmPassword.error) {
      toast.error("Password Not Matched", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else {
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
      navigate("/");
    }
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
                  ref={nameRef}
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
                  ref={emailRef}
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
                  ref={passwordRef}
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
                  className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded"
                  // ref={confirmPasswordRef}
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  required
                />
                <p className="text-red-700">{confirmPassword.error}</p>
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
            <div>{errorElement}</div>
            <div>
              <button
                disabled={!agree}
                className={`${
                  !agree
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-yellow-400 cursor-pointer"
                } text-slate-900 px-5 py-2 font-bold  rounded hover:shadow-md shadow-none my-2`}
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
    </>
  );
};

export default SignupForm;
