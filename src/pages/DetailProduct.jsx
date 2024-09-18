import React from "react";
import Header from "../components/Header";
import FixedHeader from "../components/FixedHeader";
import Footer from "../components/Footer";
import ShowDetailProduct from "../components/ShowDetailProduct";
import Recomment from "../components/Recomment";

const DetailProduct = () => {
  return (
    <div>
      <Header />
      <div className="sticky">
        <FixedHeader />
      </div>
      <ShowDetailProduct />
      <Recomment />
      <Footer />
    </div>
  );
};

export default DetailProduct;
