import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import FixedHeader from "../components/FixedHeader";

const Home = () => {

  return (
    <div>
      <Header />
      <div className="sticky">
        <FixedHeader/>
      </div>
      <Banner />
      <Filter/>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Home;
