import React from "react";
import FixedHeader from "../components/FixedHeader";
import Footer from "../components/Footer";
import ShowCart from "../components/ShowCart";

const Cart = () => {
  return (
    <div>
      <div className="sticky">
        <FixedHeader />
      </div>{" "}
      <ShowCart />
      <Footer />
    </div>
  );
};

export default Cart;
