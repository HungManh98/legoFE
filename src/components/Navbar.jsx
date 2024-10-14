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
        <span className="dropbar">Danh sach san pham</span>
      </Dropdown>
      <Dropdown  menu={{ items: menuItems }} trigger={["hover"]}>
        <span>San Pham 2</span>
      </Dropdown>
      <Dropdown menu={{ items: menuItems }} trigger={["hover"]}>
        <span>San Pham 3</span>
      </Dropdown>
      <Dropdown menu={{ items: menuItems }} trigger={["hover"]}>
        <span>Danh sach san pham</span>
      </Dropdown>
      <Dropdown menu={{ items: menuItems }} trigger={["hover"]}>
        <span>Danh sach san pham</span>
      </Dropdown>
    </div>
  );
};

export default Navbar;
