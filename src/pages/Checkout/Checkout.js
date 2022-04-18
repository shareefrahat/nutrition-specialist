import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Confirmation from "../../components/Confirmation/Confirmation";
import auth from "../../firebase.init";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const [confirm, setConfirm] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    setConfirm(true);
  };

  return (
    <>
      {!confirm ? (
        <div>
          <section>
            <h2 className="text-green-800 text-2xl lg:text-4xl font-bold my-10 font-serif">
              Steps To Get Service
            </h2>
          </section>
          <section className="shadow-lg border border-green-800 w-fit mx-auto p-5 rounded">
            <form onSubmit={handleCheckout}>
              <h4 className="inline-block text-md font-bold mb-5 text-xl md:text-2xl px-2 text-slate-900 font-serif">
                Service Form
              </h4>
              <div className="text-left flex flex-col gap-4 justify-center items-center px-2 md:px-6 text-lg">
                <div>
                  <label htmlFor="user-name">Name:</label>
                  <div>
                    <input
                      className="px-4 py-2 border bg-gray-200 border-gray-400 focus:border-yellow-500 outline-none rounded"
                      value={user?.displayName}
                      type="text"
                      name="username"
                      id="user-name"
                      readOnly
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="user-email">Email:</label>
                  <div>
                    <input
                      className="px-4 py-2 border bg-gray-200 border-gray-400 focus:border-yellow-500 outline-none rounded"
                      value={user?.email}
                      type="email"
                      name="email"
                      id="user-email"
                      readOnly
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="user-email">Phone:</label>
                  <div>
                    <input
                      className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded"
                      type="number"
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="user-email">Choose Date:</label>
                  <div>
                    <input
                      className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded bg-white"
                      type="date"
                      name="date"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="user-email">Choose Service:</label>
                  <div>
                    <select
                      className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded bg-white"
                      required
                    >
                      <option value="A">Mean & Diet Plan</option>
                      <option value="B">Metabolism Checkup</option>
                      <option value="C">Nutrition Counseling</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="user-name">Description:</label>
                  <div>
                    <textarea
                      className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded"
                      name=""
                      id=""
                      cols="22"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    className="bg-green-800 text-white px-5 py-2 font-bold  rounded hover:shadow-md shadow-none my-2"
                    type="submit"
                  >
                    Confirm Checkout
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      ) : (
        <div>
          <Confirmation></Confirmation>
        </div>
      )}
    </>
  );
};

export default Checkout;
