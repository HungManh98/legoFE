import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import FixedHeader from "../../components/FixedHeader";
import Recomment from "../../components/Recomment";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import Footer from "../../components/Footer";
import { ToastContainer, toast } from "react-toastify";

const Can = () => {
  const { products } = useContext(AppContext);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes("cân")
  );

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
      `Sản phẩm đã được thêm vào giỏ hàng. Giỏ hàng của bạn sẽ được cập nhật`,
      {
        position: toast.TOP_CENTER,
        autoClose: 3000,
      }
    );
  };

  return (
    <div>
      <Header />
      <div className="sticky">
        <FixedHeader />
      </div>

      <div className="divTag">
        <div className="khungSanPham" id="khungTag">
          <h3 className="ghTag">* Gian Hàng Cân *</h3>
          <div className="list">
            {filteredProducts.map((product) => (
              <div className="mapProduct" key={product.id}>
                <NavLink to={`/${product.id}`}>
                  <div id="item">
                    <div className="img">
                      <img id="Image" src={product.img} alt={product.name} />
                    </div>
                    <h4>{product.name}</h4>
                    <div id="price">{product.price.toLocaleString()} VND</div>
                  </div>
                </NavLink>
                <button id="add" onClick={() => addToCart(product)}>
                  <IoIosAddCircleOutline size={30} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Recomment />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Can;
