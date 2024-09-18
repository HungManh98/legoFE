import React from "react";
import FixedHeader from "../components/FixedHeader";
import FormRegis from "../components/FormRegis";

const Register = () => {
  return (
    <div>
      <div className="sticky">
        <FixedHeader />
      </div>{" "}
      <FormRegis />
    </div>
  );
};

export default Register;
