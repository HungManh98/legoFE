import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { RiRefund2Fill } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowDetailProduct = () => {
  const [data, setData] = useState({});
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [actionText, setActionText] = useState("Mua hàng");

  const { products } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const product = products.find((product) => {
      return product.id.toString() === id;
    });
    setData(product);
    setPrice(product.price);
  }, [id, products]);

  const formattedPrice = price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  });

  const handleAdd = () => {
    const user = localStorage.getItem("loggedInUser");

    if (!user) {
      setMessage("Bạn cần đăng nhập trước để thêm sản phẩm vào giỏ hàng.");
      setActionText("Đến trang đăng nhập");
    } else {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      cartItems.push(data);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      toast.success("Sản phẩm đã được thêm vào giỏ hàng.");

      setMessage("Sản phẩm đã được thêm vào giỏ hàng thành công!");
      setActionText("Tiếp tục mua hàng");
    }
  };

  const handleAction = () => {
    if (actionText === "Đến trang đăng nhập") {
      navigate("/login"); 
    } else if (actionText === "Tiếp tục mua hàng") {
      navigate("/"); 
    }
  };

  return (
    <div id="showDetail">
      <h1>{data.name}</h1>
      <br />
      <hr />
      <div id="main">
        <div className="cartImg">
          <img src={data.img} />
        </div>
        <div className="addToCart">
          <div>
            <h3>{formattedPrice}</h3>
            <div>{data.category}</div>
          </div>
          <div>
            <div className="policy">
              <RiVerifiedBadgeLine />
              <p>Bảo hành chính hãng.</p>
            </div>
            <div className="policy">
              <RiRefund2Fill />
              <p>1 đổi 1 nếu lỗi, đổi sản phẩm tại nhà trong 1 ngày.</p>
            </div>
          </div>
          <button onClick={handleAdd}>
            <div>
              <IoMdAddCircleOutline />
              <strong>
                <p>Thêm vào giỏ hàng</p>
              </strong>
            </div>
            <p>Giao trong 1 giờ hoặc nhận tại cửa hàng</p>
          </button>
          {message && (
            <div>
              <div className="message">{message}</div>
              <button className="button" onClick={handleAction}>
                {actionText}
              </button>
            </div>
          )}
        </div>
        <div className="moTa">
          <h2>Thông tin sản phẩm</h2>
          <ul className="info">
            <li>
              <p>Thông tin</p>
              <div>{data.category}</div>
            </li>
            <li>
              <p>Xuất xứ</p>
              <div>Bỉ</div>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShowDetailProduct;
