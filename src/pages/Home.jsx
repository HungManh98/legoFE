import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import FixedHeader from "../components/FixedHeader";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <Header /> <hr />
      <div className="sticky">
        <FixedHeader />
      </div>
      <Navbar />
      <Banner />
      <ProductList />
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Home;
