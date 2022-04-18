import React from "react";
import blogImg from "../../images/blog.png";
const Accordion = () => {
  return (
    <div>
      <div className="accordion lg:w-1/2 mx-auto" id="accordionExample">
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne ">
            <button
              className="
              font-semibold
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Difference between 'Authentication' & 'Authorization'
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 text-justify lg:text-xl">
              <p>
                Authentication হচ্ছে কোনো একজন user এর identity verify করার একটি
                প্রক্রিয়া, যেখানে Authorization হচ্ছে সে user কোন application,
                files or ডাটা access করতে পারবে সেটি verify করার একটি প্রক্রিয়া।
              </p>

              <p>
                Authentication প্রক্রিয়াটি ঘটে Authorization প্রক্রিয়ার আগে।
                অর্থাৎ Authentication সম্পন্ন হলে সে user কোন কোন resource
                access করতে পারবে সেটা verify করবে, that means Authorization চেক
                করবে। নিম্নে চিত্রের সাহায্যে দেখানো হলো:
              </p>
              <img className="w-[400px] mx-auto py-4" src={blogImg} alt="" />
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingTwo">
            <button
              className="
              font-semibold
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Why are you using `firebase`? What other options do you have to
              implement authentication?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 text-justify lg:text-xl">
              <p>
                I personally like working with Firebase, especially because:
                <ul className="list-disc list-inside ml-4">
                  <li>First off all এটি free.</li>
                  <li>Secure authentication system provide করে।</li>
                  <li>Development time কমিয়ে দেয় এবং productivity বাড়ায়।</li>
                  <li>
                    Firebase এর database management খুব সহজ এবং convenient.
                  </li>
                  <li>এছাড়াও firebase এ website host করতে পারি।</li>
                </ul>
              </p>

              <p>
                Others options to implement authentication except firebase:
                <ul className="list-disc list-inside ml-4">
                  <li>Auth0</li>
                  <li>Okta</li>
                  <li>KeyClock</li>
                  <li>Amazon Cognito, etc</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="
              font-semibold
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What other services does `firebase` provide other than
              authentication
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 text-justify lg:text-xl">
              <p>
                There are many services which Firebase provides except
                Authentication. The services Firebase provides other than
                authentication is given below:
                <ul className="list-disc list-inside ml-4">
                  <li>Realtime Database</li>
                  <li>Remote Config</li>
                  <li>Hosting</li>
                  <li>Cloud Storage</li>
                  <li>Cloud Functions</li>
                  <li>Google Analytics</li>
                  <li>Cloud Messaging</li>
                  <li>Firebase ML</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
