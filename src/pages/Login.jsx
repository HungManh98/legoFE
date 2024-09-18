import React from "react";
import LoginForm from "../components/LoginForm";
import FixedHeader from "../components/FixedHeader";

const Login = () => {
  return (
    <div>
      <div className="sticky">
        <FixedHeader />
      </div>{" "}
      <LoginForm />
    </div>
  );
};

export default Login;
