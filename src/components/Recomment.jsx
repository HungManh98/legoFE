import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { NavLink } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";

const Recomment = () => {
  const { products } = useContext(AppContext);
  console.log("🚀 ~ Recomment ~ products:", products);
  const recommentProduct = products
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);
  console.log("🚀 ~ Recomment ~ recommentProduct:", recommentProduct);

  return (
    <div id="recomment">
      <div className="khungSanPham">
        <h3 className="tenkhung" id="goiYSP">* Bạn có thể thích *</h3>
        <div className="listRecomment">
          {recommentProduct.map((product) => (
            <div className="mapProduct" key={product.id}>
              <NavLink to={`/${product.id}`}>
                <div id="item">
                  <div className="img">
                    <img id="Image" src={product.img} alt={product.name} />
                  </div>
                  <h4>{product.name}</h4>
                  <div id="price">{product.price.toLocaleString()} VND </div>
                </div>
              </NavLink>
              <div id="add">
                <IoIosAddCircleOutline size={30} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recomment;
