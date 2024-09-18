import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import FixedHeader from "../components/FixedHeader";
import { AppContext } from "../App";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Header />
      <div id="sticky">
        <FixedHeader setSelectedCategory={setSelectedCategory} />
      </div>
      <Banner />
      <Filter selectedCategory={selectedCategory} />
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Home;
