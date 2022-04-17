import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import LoginForm from "../LoginForm/LoginForm";

const Login = () => {
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
      <section>Login Heading</section>
      <section>
        <LoginForm></LoginForm>
      </section>
    </>
  );
};

export default Login;
