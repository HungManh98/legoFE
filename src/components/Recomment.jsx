import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { NavLink } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";

const Recomment = () => {
  const { products } = useContext(AppContext);
  const recommentProduct = products
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  const addToCart = async (product) => {
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!isLoggedIn) {
      toast.warn("Bạn cần đăng nhập trước!", {
        position: toast.TOP_CENTER,
        autoClose: 5000,
        onClick: () => navigate("/login"),
      });
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(
      `Sản phẩm đã được thêm vào giỏ hàng. F5 để giỏ hàng của bạn được cập nhật`,
      {
        position: toast.TOP_CENTER,
        autoClose: 3000,
      }
    );

  };

  return (
    <div id="recomment">
      <div className="khungSanPham">
        <h3 className="tenkhung" id="goiYSP">
          * Bạn có thể thích *
        </h3>
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
              <button id="add" onClick={() => addToCart(product)}>
                <IoIosAddCircleOutline size={30} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Recomment;
