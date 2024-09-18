import React from "react";
import FixedHeader from "../components/FixedHeader";
import Footer from "../components/Footer";
import ShowCart from "../components/ShowCart";
import Recomment from "../components/Recomment";
import Banner from "../components/Banner";

const Cart = () => {
  return (
    <div>
      <div className="sticky">
        <FixedHeader />
      </div>{" "}
      <ShowCart />
      <Recomment />
      <Footer />
    </div>
  );
};

export default Cart;
