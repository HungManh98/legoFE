import { useState, createContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import DetailProduct from "./pages/DetailProduct";
import Register from "./pages/Register";
import CSBaoMat from "./pages/CSBaoMat";
import CSThanhToan from "./pages/CSThanhToan";
import CSHoanTra from "./pages/CSHoanTra";
import Profile from "./pages/Profile";
import Yen from "./pages/tagPages/Yen";
import Ruou from "./pages/tagPages/Ruou";
import Chocolate from "./pages/tagPages/Chocolate";
import Bia from "./pages/tagPages/Bia";
import Sot from "./pages/tagPages/Sot";
import Nam from "./pages/tagPages/Nam";
import Quat from "./pages/tagPages/Quat";
import Can from "./pages/tagPages/Can";
import Noi from "./pages/tagPages/Noi";
import LongDen from "./pages/tagPages/LongDen";

export const AppContext = createContext(null);

function App() {
  const products = [
    {
      id: 1,
      name: "Bia Budweiser Thùng 24 Chai Aluminum 355ml",
      price: 988000,
      category: "đồ uống",
      img: "https://cheapmart56.com/img/sanpham/douong/2.jpg",
      rating: 3,
    },
    {
      id: 2,
      name: "Bia Corona Extra Combo 2 Thùng 24 Chai ",
      price: 1378000,
      category: "đồ uống",
      img: "https://cheapmart56.com/img/sanpham/douong/1.jpg",
      rating: 3,
    },
    {
      id: 3,
      name: "Cân tiểu ly Kitchen Scale 10kg nhà bếp cao cấp, chính hãng",
      price: 81000,
      category: "đồ gia dụng",
      img: "https://cheapmart56.com/img/sanpham/dogiadung/5.jpeg",
      rating: 2,
    },
    {
      id: 4,
      name: "Chocolate Ferrero Collection Ý 24 Viên 269g",
      price: 360000,
      category: "bánh kẹo",
      img: "https://cheapmart56.com/img/sanpham/banhkeo/3.jpg",
      rating: 4,
    },
    {
      id: 5,
      name: "Huyết Yến TINH CHẾ Cao Cấp",
      price: 1078000,
      category: "thực phẩm bổ dưỡng",
      img: "https://cheapmart56.com/img/sanpham/thucphamboduong/2.jpg",
      rating: 3,
    },
    {
      id: 6,
      name: "Huyết Yến TINH CHẾ Cao Cấp 100g",
      price: 2475000,
      category: "thực phẩm bổ dưỡng",
      img: "https://cheapmart56.com/img/sanpham/thucphamboduong/3.jpg",
      rating: 3,
    },
    {
      id: 7,
      name: "Kẹo Dẻo Cuộn Fruit By The Foot Mỹ Thùng 48 Cái",
      price: 570000,
      category: "bánh kẹo",
      img: "https://cheapmart56.com/img/sanpham/banhkeo/1.jpg",
      rating: 4,
    },
    {
      id: 8,
      name: "Kẹo Dẻo Gấu Organic Black Forest Mỹ Thùng 65 Gói",
      price: 550000,
      category: "bánh kẹo",
      img: "https://cheapmart56.com/img/sanpham/banhkeo/2.jpg",
      rating: 4,
    },
    {
      id: 9,
      name: "Lồng đèn trung thu",
      price: 50000,
      category: "đồ gia dụng",
      img: "https://cheapmart56.com/img/sanpham/dogiadung/3.jpeg",
      rating: 2,
    },
    {
      id: 10,
      name: "Nấm Sấy Khô Shiitake DJ&A Úc 65g",
      price: 97000,
      category: "bánh kẹo",
      img: "https://cheapmart56.com/img/sanpham/banhkeo/5.jpg",
      rating: 4,
    },
    {
      id: 11,
      name: "Nồi Chiên Không Dầu CAMEL 12L nắp ngang",
      price: 413000,
      category: "đồ gia dụng",
      img: "https://cheapmart56.com/img/sanpham/dogiadung/1.jpeg",
      rating: 2,
    },
    {
      id: 12,
      name: "Nồi chiên không dầu MALATA 10L chính hãng, an toàn cho sức khỏe",
      price: 418000,
      category: "đồ gia dụng",
      img: "https://cheapmart56.com/img/sanpham/dogiadung/2.jpeg",
      rating: 2,
    },
    {
      id: 13,
      name: "Quạt để bàn USB đế tròn, quạt tích điện mini giá rẻ",
      price: 50000,
      category: "đồ gia dụng",
      img: "https://cheapmart56.com/img/sanpham/dogiadung/4.jpeg",
      rating: 2,
    },
    {
      id: 14,
      name: "RƯỢU ĐẢNG SÂM Tươi ",
      price: 650000,
      category: "đồ uống",
      img: "https://cheapmart56.com/img/sanpham/douong/4.jpg",
      rating: 3,
    },
    {
      id: 15,
      name: "RƯỢU NGÂM TỔ ONG RUỒI 1",
      price: 950000,
      category: "đồ uống",
      img: "https://cheapmart56.com/img/sanpham/douong/3.jpg",
      rating: 3,
    },
    {
      id: 16,
      name: "RƯỢU NGÂM TỔ ONG RUỒI 2",
      price: 890000,
      category: "đồ uống",
      img: "https://cheapmart56.com/img/sanpham/douong/3.jpg",
      rating: 3,
    },
    {
      id: 17,
      name: "Sốt Nutella Ferrero Đức 450g",
      price: 180000,
      category: "bánh kẹo",
      img: "https://cheapmart56.com/img/sanpham/banhkeo/4.jpg",
      rating: 4,
    },
    {
      id: 18,
      name: "Yến Baby Tinh Chế",
      price: 2400000,
      category: "thực phẩm bổ dưỡng",
      img: "https://cheapmart56.com/img/sanpham/thucphamboduong/4.jpg",
      rating: 3,
    },
    {
      id: 19,
      name: "Yến TINH CHẾ Thượng Hạng 100g",
      price: 3289000,
      category: "thực phẩm bổ dưỡng",
      img: "https://cheapmart56.com/img/sanpham/thucphamboduong/3.jpg",
      rating: 3,
    },
    {
      id: 20,
      name: "Yến TINH CHẾ Thượng Hạng 50g",
      price: 1650000,
      category: "thực phẩm bổ dưỡng",
      img: "https://cheapmart56.com/img/sanpham/thucphamboduong/1.jpg",
      rating: 3,
    },
  ];

  return (
    <AppContext.Provider value = {{products : products}} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:id" element={<DetailProduct />} />
          <Route path="/chinh-sach-bao-mat" element={<CSBaoMat />} />
          <Route path="/chinh-sach-thanh-toan" element={<CSThanhToan />} />
          <Route path="/chinh-sach-hoan-tra" element={<CSHoanTra />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/yen" element={<Yen />} />
          <Route path="/ruou" element={<Ruou />} />
          <Route path="/chocolate" element={<Chocolate />} />
          <Route path="/bia" element={<Bia />} />
          <Route path="/sot" element={<Sot />} />
          <Route path="/nam" element={<Nam />} />
          <Route path="/quat" element={<Quat />} />
          <Route path="/can" element={<Can />} />
          <Route path="/noi" element={<Noi />} />
          <Route path="/long-den" element={<LongDen />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
