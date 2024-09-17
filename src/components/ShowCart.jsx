import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoTrashBinOutline } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowCart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity ?? 1,
    }));
    setCart(updatedCart);
  }, []); 

  const user = JSON.parse(localStorage.getItem("user"));
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const isLoggedIn = !!loggedInUser;
  const hasItems = cart.length > 0;

  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity = Math.max(item.quantity + delta, 1); // Đảm bảo số lượng không nhỏ hơn 1
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleThanhToan = () => {
    toast.success("thanh toán thành công, đơn hàng sẽ sớm được gửi đến bạn");
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div id="cart">
      {!isLoggedIn ? (
        <div id="isLogged">
          <p>Bạn chưa đăng nhập</p>
          <button onClick={() => navigate("/login")}>
            Đến trang đăng nhập
          </button>
        </div>
      ) : !hasItems ? (
        <div id="hasItem">
          <p>Chưa có sản phẩm nào được thêm vào giỏ hàng</p>
          <button onClick={() => navigate("/")}>Tiếp tục mua hàng</button>
        </div>
      ) : (
        <>
          <h1>Giỏ hàng của bạn</h1>

          <div className="cartContainer">
            <div className="thongTinThanhToan">
              <h2>Thông Tin Thanh Toán</h2>
              <label htmlFor="phone">Số điện thoại *</label>
              <input type="text" id="phone" name="phone" required />

              <label htmlFor="address">Địa Chỉ *</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div className="listInCart">
              <table>
                <thead>
                  <tr>
                    <th>Tên Sản Phẩm</th>
                    <th>Đơn Giá</th>
                    <th>Số Lượng</th>
                    <th>Thành Tiền</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td> {/* Sản phẩm */}
                      <td>{item.price.toLocaleString()} VNĐ</td> {/* Giá */}
                      <td>
                        <button onClick={() => updateQuantity(item.id, -1)}>
                          -
                        </button>
                        {item.quantity}
                        <button onClick={() => updateQuantity(item.id, 1)}>
                          +
                        </button>
                      </td>{" "}
                      {/* Số lượng */}
                      <td>
                        {(item.price * item.quantity).toLocaleString()} VNĐ
                      </td>{" "}
                      {/* Thành tiền */}
                      <td>
                        <button onClick={() => handleRemoveItem(item.id)}>
                          <IoTrashBinOutline color="red" />
                        </button>
                      </td>{" "}
                      {/* Xóa */}
                    </tr>
                  ))}
                  {/* Dòng tổng kết */}
                  <tr>
                    <td colSpan="3">Tổng tiền:</td>
                    <td>{totalAmount.toLocaleString()} VNĐ</td>
                    <td>
                      <button id="btnThanhToan" onClick={handleThanhToan}>
                        Thanh toán
                      </button>{" "}
                      {/* Thanh toán */}
                    </td>
                    <td>
                      <button id="delAll" onClick={handleClearCart}>
                        Xóa hết
                      </button>{" "}
                      {/* Xóa hết */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default ShowCart;
