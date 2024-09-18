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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
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

    navigate("/")
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

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      // Lọc sản phẩm dựa trên tên gần đúng
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
      setSelectedIndex(-1); 
    } else {
      setFilteredProducts([]);
    }
  };

  const handleSelectProduct = (product) => {
    setSearchTerm(product.name);
    setFilteredProducts([]);
    navigate(`/${product.id}`);
  };

  // Xử lý sự kiện bàn phím (lên/xuống và Enter)
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      // Di chuyển xuống danh sách
      setSelectedIndex((prevIndex) =>
        Math.min(prevIndex + 1, filteredProducts.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      // Di chuyển lên danh sách
      setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      // Chọn sản phẩm khi nhấn Enter
      handleSelectProduct(filteredProducts[selectedIndex]);
    }
  };

  return (
    <div>
      <div className="stickyHeader">
        <div className="flexSticky">
          <div id="logo">
            <NavLink to="/">
              <AiOutlineShoppingCart size={60} />
              <span id="cheap">TT</span>
              <span>MART</span>
            </NavLink>
          </div>
          <div className="searchHeader">
            <Input
              id="search"
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
              placeholder="Tìm sản phẩm..."
            />
            <ul className="dropdown">
              {searchTerm ? (
                filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <li
                      key={product.id}
                      className={index === selectedIndex ? "selected" : ""}
                      onClick={() => handleSelectProduct(product)}
                    >
                      <img
                        src={product.img}
                        alt={product.name}
                        className="product-image"
                      />
                      {product.name}
                    </li>
                  ))
                ) : (
                  <li>Không có sản phẩm tương ứng</li>
                )
              ) : null}
            </ul>
            <div className="tag">
              <NavLink to="/yen" >Yến</NavLink>
              <NavLink to="/ruou" >Rượu</NavLink>
              <NavLink to="/chocolate" >Chocolate</NavLink>
              <NavLink to="/bia" >Bia</NavLink>
              <NavLink to="/sot" >Sốt</NavLink>
              <NavLink to="/nam" >Nấm</NavLink>
              <NavLink to="/quat" >Quạt</NavLink>
              <NavLink to="/can" >Cân</NavLink>
              <NavLink to="/noi" >Nồi</NavLink>
              <NavLink to="/long-den" >Lồng đèn</NavLink>
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
