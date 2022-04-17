import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SignupForm from "../SignupForm/SignupForm";

const Signup = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  });
  return (
    <>
      <section>signup heading</section>
      <section>
        <SignupForm></SignupForm>
      </section>
    </>
  );
};

export default Signup;
