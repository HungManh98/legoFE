import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import "antd/dist/reset.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FixedHeader = () => {
  const navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Xóa thông tin người dùng khỏi localStorage
    setLoggedInUser(null); // Cập nhật trạng thái
    toast.success("Bạn vừa đăng xuất!");
  };

  const menuItems = [
    {
      key: "profile",
      label: "Tài khoản",
      onClick: () => navigate("/profile"),
    },
    {
      key: "logout",
      label: "Đăng xuất",
      onClick: handleLogout,
    },
  ];

  return (
    <div>
      <div className="stickyHeader">
        <div className="flexSticky">
          <div id="logo">
            <NavLink to="/">
              <AiOutlineShoppingCart size={60} />
              <span id="cheap">ThuyTien</span>
              <span>mart</span>
            </NavLink>
          </div>
          <div className="searchHeader">
            <Input placeholder="Tìm kiếm sản phẩm" id="search" />
            <div className="tag">
              <a href="">Yến</a>
              <a href="">Rượu</a>
              <a href="">Chocolate</a>
              <a href="">Bia</a>
              <a href="">Sốt</a>
              <a href="">Nấm</a>
              <a href="">Quạt</a>
              <a href="">Cân</a>
              <a href="">Nồi</a>
              <a href="">Lồng đèn</a>
            </div>
          </div>
          <div className="toolMember">
            {loggedInUser ? (
              <Dropdown menu={{ items: menuItems }} trigger={["hover"]}>
                <div className="account">
                  <div id="boderIconPerson">
                    <IoPersonSharp size={24} />
                  </div>
                  <span>{loggedInUser.username || loggedInUser.email}</span>
                </div>
              </Dropdown>
            ) : (
              <div className="account">
                <NavLink to="/login" className="link">
                  <div id="boderIconPerson">
                    <IoPersonSharp size={24} />
                  </div>
                  Tài khoản
                </NavLink>
              </div>
            )}

            <div className="cart">
              <NavLink to="/cart" className="link">
                <div id="boderIconCart">
                  <HiShoppingCart />
                </div>
                Giỏ hàng
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FixedHeader;
