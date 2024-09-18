import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { NavLink } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";

const Recomment = () => {
  const { products } = useContext(AppContext);
  console.log("🚀 ~ Recomment ~ products:", products);
  const recommentProduct = products
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);
  console.log("🚀 ~ Recomment ~ recommentProduct:", recommentProduct);

  const addToCart = async (product) => {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!isLoggedIn) {
      // Nếu chưa đăng nhập, hiển thị thông báo và chuyển đến trang đăng nhập
      toast.warn("Bạn cần đăng nhập trước!", {
        position: toast.TOP_CENTER,
        autoClose: 5000,
        onClick: () => navigate("/login"), // Chuyển đến trang đăng nhập khi nhấn vào thông báo
      });
      return;
    }

    // Nếu đã đăng nhập, thực hiện thêm sản phẩm vào giỏ hàng
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(
      `Sản phẩm đã được thêm vào giỏ hàng. Giỏ hàng của bạn sẽ được cập nhật`,
      {
        position: toast.TOP_CENTER,
        autoClose: 3000,
      }
    );

    await new Promise((resolve) => setTimeout(resolve, 3000));

    window.location.reload();
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
