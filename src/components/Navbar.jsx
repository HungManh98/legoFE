import { Dropdown } from "antd";
import React from "react";

const Navbar = () => {
  const menuItems = [
    {
      key: "item1",
      label: "item1",
      onClick: () => navigate("/"),
    },
    {
      key: "item2",
      label: "item2",
      onClick: () => navigate("/"),
    },
  ];

  return (
    <div className="navbar">
      <Dropdown menu={{ items: menuItems }} trigger={["hover"]}>
        <span className="dropbar">Hàng Mới</span>
      </Dropdown>
      <Dropdown  menu={{ items: menuItems }} trigger={["hover"]}>
        <span>Sản Phẩm</span>
      </Dropdown>
      <Dropdown menu={{ items: menuItems }} trigger={["hover"]}>
        <span>Khuyễn Mãi</span>
      </Dropdown>
      <Dropdown menu={{ items: menuItems }} trigger={["hover"]}>
        <span>Chương Trình Thành Viên</span>
      </Dropdown>
      <Dropdown menu={{ items: menuItems }} trigger={["hover"]}>
        <span>Cẩm Nang</span>
      </Dropdown>
    </div>
  );
};

export default Navbar;
