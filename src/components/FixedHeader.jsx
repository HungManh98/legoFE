import { Input } from "antd";
import React, { useEffect, useState, useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
import "antd/dist/reset.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../App";

const FixedHeader = () => {
  const { products } = useContext(AppContext); // Lấy products từ context
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    toast.success("Bạn vừa đăng xuất!");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    navigate("/");
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
  const menuItem2 = [
    {
      key: "login",
      label: "Dang Nhap",
      onClick: () => navigate("/login"),
    },
    {
      key: "register",
      label: "Đăng Ki",
      onClick: () => navigate("/register"),
    },
  ];

  return (
    <div>
      <div className="stickyHeader">
        <div className="flexSticky">
          <div id="logo">
            <NavLink to="/">
              <AiOutlineShoppingCart size={60} />
              <span id="cheap">Your</span>
              <span>Logo</span>
            </NavLink>
          </div>
          <div className="searchHeader">
            <Input id="search" type="text" placeholder="Tìm sản phẩm..." />
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
                <Dropdown menu={{ items: menuItem2 }} trigger={["hover"]}>
                  <div className="account">
                    <div id="boderIconPerson">
                      <IoPersonSharp size={20} />
                    </div>
                    <span>Đăng nhập</span>
                  </div>
                </Dropdown>
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
