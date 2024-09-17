import React, { useContext, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { Card, Image } from "antd";
import { NavLink } from "react-router-dom";
const { Meta } = Card;
import { IoIosAddCircleOutline } from "react-icons/io";
import { AppContext } from "../App";

// Sample product data
// const products = [
//   {
//     id: 1,
//     name: "Cheapmart Bia Budweiser Thùng 24 Chai Aluminum 355ml",
//     price: 988000,
//     category: "đồ uống",
//     img: "https://cheapmart56.com/img/sanpham/douong/2.jpg",
//     rating: 3,
//   },
//   {
//     id: 2,
//     name: "Cheapmart Bia Corona Extra Combo 2 Thùng 24 Chai ",
//     price: 1378000,
//     category: "đồ uống",
//     img: "https://cheapmart56.com/img/sanpham/douong/1.jpg",
//     rating: 3,
//   },
//   {
//     id: 3,
//     name: "Cheapmart Cân tiểu ly Kitchen Scale 10kg nhà bếp cao cấp, chính hãng",
//     price: 81000,
//     category: "đồ gia dụng",
//     img: "https://cheapmart56.com/img/sanpham/dogiadung/5.jpeg",
//     rating: 2,
//   },
//   {
//     id: 4,
//     name: "Cheapmart Chocolate Ferrero Collection Ý 24 Viên 269g",
//     price: 360000,
//     category: "bánh kẹo",
//     img: "https://cheapmart56.com/img/sanpham/banhkeo/3.jpg",
//     rating: 4,
//   },
//   {
//     id: 5,
//     name: "Cheapmart Huyết Yến TINH CHẾ Cao Cấp",
//     price: 1078000,
//     category: "thực phẩm bổ dưỡng",
//     img: "https://cheapmart56.com/img/sanpham/thucphamboduong/2.jpg",
//     rating: 3,
//   },
//   {
//     id: 6,
//     name: "Cheapmart Huyết Yến TINH CHẾ Cao Cấp 100g",
//     price: 2475000,
//     category: "thực phẩm bổ dưỡng",
//     img: "https://cheapmart56.com/img/sanpham/thucphamboduong/3.jpg",
//     rating: 3,
//   },
//   {
//     id: 7,
//     name: "Cheapmart Kẹo Dẻo Cuộn Fruit By The Foot Mỹ Thùng 48 Cái",
//     price: 570000,
//     category: "bánh kẹo",
//     img: "https://cheapmart56.com/img/sanpham/banhkeo/1.jpg",
//     rating: 4,
//   },
//   {
//     id: 8,
//     name: "Cheapmart Kẹo Dẻo Gấu Organic Black Forest Mỹ Thùng 65 Gói",
//     price: 550000,
//     category: "bánh kẹo",
//     img: "https://cheapmart56.com/img/sanpham/banhkeo/2.jpg",
//     rating: 4,
//   },
//   {
//     id: 9,
//     name: "Cheapmart Lồng đèn trung thu",
//     price: 50000,
//     category: "đồ gia dụng",
//     img: "https://cheapmart56.com/img/sanpham/dogiadung/3.jpeg",
//     rating: 2,
//   },
//   {
//     id: 10,
//     name: "Cheapmart Nấm Sấy Khô Shiitake DJ&A Úc 65g",
//     price: 97000,
//     category: "bánh kẹo",
//     img: "https://cheapmart56.com/img/sanpham/banhkeo/5.jpg",
//     rating: 4,
//   },
//   {
//     id: 11,
//     name: "Cheapmart Nồi Chiên Không Dầu CAMEL 12L nắp ngang",
//     price: 413000,
//     category: "đồ gia dụng",
//     img: "https://cheapmart56.com/img/sanpham/dogiadung/1.jpeg",
//     rating: 2,
//   },
//   {
//     id: 12,
//     name: "Cheapmart Nồi chiên không dầu MALATA 10L chính hãng, an toàn cho sức khỏe",
//     price: 418000,
//     category: "đồ gia dụng",
//     img: "https://cheapmart56.com/img/sanpham/dogiadung/2.jpeg",
//     rating: 2,
//   },
//   {
//     id: 13,
//     name: "Cheapmart Quạt để bàn USB đế tròn, quạt tích điện mini giá rẻ",
//     price: 50000,
//     category: "đồ gia dụng",
//     img: "https://cheapmart56.com/img/sanpham/dogiadung/4.jpeg",
//     rating: 2,
//   },
//   {
//     id: 14,
//     name: "Cheapmart RƯỢU ĐẢNG SÂM Tươi ",
//     price: 650000,
//     category: "đồ uống",
//     img: "https://cheapmart56.com/img/sanpham/douong/4.jpg",
//     rating: 3,
//   },
//   {
//     id: 15,
//     name: "Cheapmart RƯỢU NGÂM TỔ ONG RUỒI 1",
//     price: 950000,
//     category: "đồ uống",
//     img: "https://cheapmart56.com/img/sanpham/douong/3.jpg",
//     rating: 3,
//   },
//   {
//     id: 15,
//     name: "Cheapmart RƯỢU NGÂM TỔ ONG RUỒI 2",
//     price: 890000,
//     category: "đồ uống",
//     img: "https://cheapmart56.com/img/sanpham/douong/3.jpg",
//     rating: 3,
//   },
//   {
//     id: 16,
//     name: "Cheapmart Sốt Nutella Ferrero Đức 450g",
//     price: 180000,
//     category: "bánh kẹo",
//     img: "https://cheapmart56.com/img/sanpham/banhkeo/4.jpg",
//     rating: 4,
//   },
//   {
//     id: 17,
//     name: "Cheapmart Yến Baby Tinh Chế",
//     price: 2400000,
//     category: "thực phẩm bổ dưỡng",
//     img: "https://cheapmart56.com/img/sanpham/thucphamboduong/4.jpg",
//     rating: 3,
//   },
//   {
//     id: 18,
//     name: "Cheapmart Yến TINH CHẾ Thượng Hạng 100g",
//     price: 3289000,
//     category: "thực phẩm bổ dưỡng",
//     img: "https://cheapmart56.com/img/sanpham/thucphamboduong/3.jpg",
//     rating: 3,
//   },
//   {
//     id: 19,
//     name: "Cheapmart Yến TINH CHẾ Thượng Hạng 50g",
//     price: 1650000,
//     category: "thực phẩm bổ dưỡng",
//     img: "https://cheapmart56.com/img/sanpham/thucphamboduong/1.jpg",
//     rating: 3,
//   },
// ];

// const doUong = products.filter((product) => product.category === "đồ uống");
// const banhKeo = products.filter((product) => product.category === "bánh kẹo");
// const thucPhamBoDuong = products.filter(
//   (product) => product.category === "thực phẩm bổ dưỡng"
// );
// const doGiadung = products.filter(
//   (product) => product.category === "đồ gia dụng"
// );

const Filter = () => {
  const { products } = useContext(AppContext);
  console.log("🚀 ~ Filter ~ products:", products)

  const doUong = products.filter((product) => product.category === "đồ uống");
  const banhKeo = products.filter((product) => product.category === "bánh kẹo");
  const thucPhamBoDuong = products.filter(
    (product) => product.category === "thực phẩm bổ dưỡng"
  );
  const doGiadung = products.filter(
    (product) => product.category === "đồ gia dụng"
  );


  const [isDropdownOpen, setIsDropdownOpen] = useState({
    price: false,
    category: false,
    rating: false,
    sort: false,
  });
  const [selectedFilters, setSelectedFilters] = useState({
    price: null,
    category: null,
    rating: null,
    sort: null,
  });

  const handleMouseEnter = (menu) => {
    setIsDropdownOpen({ ...isDropdownOpen, [menu]: true });
  };

  const handleMouseLeave = (menu) => {
    setIsDropdownOpen({ ...isDropdownOpen, [menu]: false });
  };

  const handleSelect = (filterType, value) => {
    setSelectedFilters({ ...selectedFilters, [filterType]: value });
  };

  const clearFilter = (filterType) => {
    setSelectedFilters({ ...selectedFilters, [filterType]: null });
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      price: null,
      category: null,
      rating: null,
      sort: null,
    });
  };

  const getFilteredProducts = () => {
    return products
      .filter((product) => {
        const { price, category, rating } = selectedFilters;
        return (
          (!price ||
            (price === "under-1m" && product.price < 1000000) ||
            (price === "1-4m" &&
              product.price >= 1000000 &&
              product.price <= 4000000) ||
            (price === "over-4m" && product.price > 4000000)) &&
          (!category || product.category === category) &&
          (!rating ||
            (rating === "2-star" && product.rating >= 2) ||
            (rating === "3-star" && product.rating >= 3) ||
            (rating === "4-star" && product.rating >= 4))
        );
      })
      .sort((a, b) => {
        const { sort } = selectedFilters;
        if (!sort) return 0;
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        if (sort === "rating-asc") return a.rating - b.rating;
        if (sort === "rating-desc") return b.rating - a.rating;
        if (sort === "name-asc") return a.name.localeCompare(b.name);
        if (sort === "name-desc") return b.name.localeCompare(a.name);
        return 0;
      });
  };

  const filteredProducts = getFilteredProducts();
  const hasFilters = Object.values(selectedFilters).some((filter) => filter);

  const filterLabels = {
    price: {
      "under-1m": "Dưới 1 triệu",
      "1-4m": "Từ 1 - 4 triệu",
      "over-4m": "Trên 4 triệu",
    },
    category: {
      "thực phẩm bổ dưỡng": "Thực Phẩm Bổ Dưỡng",
      "bánh kẹo": "Bánh Kẹo",
      "đồ uống": "Đồ Uống",
      "đồ gia dụng": "Đồ Gia Dụng",
    },
    rating: {
      "2-star": "Trên 2 sao",
      "3-star": "Trên 3 sao",
      "4-star": "Trên 4 sao",
    },
    sort: {
      "price-asc": "Giá Tăng Dần",
      "price-desc": "Giá Giảm Dần",
      "rating-asc": "Đánh Giá Tăng Dần",
      "rating-desc": "Đánh Giá Giảm Dần",
      "name-asc": "Tên A - Z",
      "name-desc": "Tên Z - A",
    },
  };

  return (
    <div id="filter">
      <div id="allSort">
        <div
          className="filter-button"
          onMouseEnter={() => handleMouseEnter("price")}
          onMouseLeave={() => handleMouseLeave("price")}
        >
          Giá Tiền
          {isDropdownOpen.price && (
            <ul className="dropdown-menu">
              <li onClick={() => handleSelect("price", "under-1m")}>
                Dưới 1 triệu
              </li>
              <li onClick={() => handleSelect("price", "1-4m")}>
                Từ 1 - 4 triệu
              </li>
              <li onClick={() => handleSelect("price", "over-4m")}>
                Trên 4 triệu
              </li>
            </ul>
          )}
        </div>
        <div
          className="filter-button"
          onMouseEnter={() => handleMouseEnter("category")}
          onMouseLeave={() => handleMouseLeave("category")}
        >
          Gian Hàng
          {isDropdownOpen.category && (
            <ul className="dropdown-menu">
              <li
                onClick={() => handleSelect("category", "thực phẩm bổ dưỡng")}
              >
                Thực Phẩm Bổ Dưỡng
              </li>
              <li onClick={() => handleSelect("category", "bánh kẹo")}>
                Bánh Kẹo
              </li>
              <li onClick={() => handleSelect("category", "đồ uống")}>
                Đồ Uống
              </li>
              <li onClick={() => handleSelect("category", "đồ gia dụng")}>
                Đồ Gia Dụng
              </li>
            </ul>
          )}
        </div>
        <div
          className="filter-button"
          onMouseEnter={() => handleMouseEnter("rating")}
          onMouseLeave={() => handleMouseLeave("rating")}
        >
          Khuyến Mại
          {isDropdownOpen.rating && (
            <ul className="dropdown-menu">
              <li onClick={() => handleSelect("rating", "2-star")}>
                Trên 2 sao
              </li>
              <li onClick={() => handleSelect("rating", "3-star")}>
                Trên 3 sao
              </li>
              <li onClick={() => handleSelect("rating", "4-star")}>
                Trên 4 sao
              </li>
            </ul>
          )}
        </div>
        <div
          className="filter-button"
          onMouseEnter={() => handleMouseEnter("sort")}
          onMouseLeave={() => handleMouseLeave("sort")}
        >
          Sắp Xếp
          {isDropdownOpen.sort && (
            <ul className="dropdown-menu">
              <li onClick={() => handleSelect("sort", "price-asc")}>
                Giá Tăng Dần
              </li>
              <li onClick={() => handleSelect("sort", "price-desc")}>
                Giá Giảm Dần
              </li>
              <li onClick={() => handleSelect("sort", "rating-asc")}>
                Đánh Giá Tăng Dần
              </li>
              <li onClick={() => handleSelect("sort", "rating-desc")}>
                Đánh Giá Giảm Dần
              </li>
              <li onClick={() => handleSelect("sort", "name-asc")}>
                Tên A - Z
              </li>
              <li onClick={() => handleSelect("sort", "name-desc")}>
                Tên Z - A
              </li>
            </ul>
          )}
        </div>
      </div>

      {hasFilters ? (
        <>
          <div className="filter-summary">
            <button id="deleteAllFil" onClick={clearAllFilters}>
              Xóa toàn bộ bộ lọc
            </button>
            <div id="deletefilter">
              {Object.entries(selectedFilters).map(
                ([filterType, value]) =>
                  value && (
                    <div key={filterType}>
                      <button onClick={() => clearFilter(filterType)}>
                        {filterLabels[filterType][value]} <TiDelete size={20} />
                      </button>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="product-list">
            {filteredProducts.map((product) => (
              <div className="mapProduct">
                <NavLink to={`/${product.id}`} key={product.id}>
                  <div key={product.id} id="item">
                    <div className="img">
                      <img id="Image" src={product.img} alt={product.name} />
                    </div>
                    <h4>{product.name}</h4>
                    <div id="price">{product.price.toLocaleString()} VND </div>
                  </div>
                </NavLink>
                <div id="add">
                  <IoIosAddCircleOutline size={30} />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="container">
          <div className="Drink">
            <div className="khungSanPham" id="khungDoUong">
              <h3 className="tenKhung" id="ghDoUong">
                * Gian Hàng Đồ Uống *
              </h3>
              <div className="list">
                {doUong.map((product) => (
                  <NavLink to={`/${product.id}`} key={product.id}>
                    <div key={product.id} id="item">
                      <div className="img">
                        <img id="Image" src={product.img} alt={product.name} />
                      </div>
                      <h4>{product.name}</h4>
                      <div id="price">
                        {product.price.toLocaleString()} VND{" "}
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
              <div className="seeALL" id="allDoUong">
                <button>Xem tất cả 5 sản phẩm</button>
              </div>
            </div>
          </div>
          <div className="confectionery">
            <div className="khungSanPham" id="khungBanhKeo">
              <h3 className="tenKhung" id="dhBanKeo">
                * Gian Hàng Bánh Kẹo *
              </h3>
              <div className="list">
                {banhKeo.map((product) => (
                  <NavLink to={`/${product.id}`} key={product.id}>
                    <div key={product.id} id="item">
                      <div className="img">
                        <img id="Image" src={product.img} alt={product.name} />
                      </div>
                      <h4>{product.name}</h4>
                      <div id="price">
                        {product.price.toLocaleString()} VND{" "}
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
              <div className="seeALL" id="allBanhKeo">
                <button>Xem tất cả 5 sản phẩm</button>
              </div>
            </div>
          </div>
          <div className="houseware">
            <div className="khungSanPham" id="khungGiaDung">
              <h3 className="tenKhung" id="dhGiaDung">
                * Gian Hàng Đồ Gia Dụng *
              </h3>
              <div className="list">
                {doGiadung.map((product) => (
                  <NavLink to={`/${product.id}`} key={product.id}>
                    <div key={product.id} id="item">
                      <div className="img">
                        <img id="Image" src={product.img} alt={product.name} />
                      </div>
                      <h4>{product.name}</h4>
                      <div id="price">
                        {product.price.toLocaleString()} VND{" "}
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
              <div className="seeALL" id="allGiaDung">
                <button>Xem tất cả 5 sản phẩm</button>
              </div>
            </div>
          </div>
          <div className="food">
            <div className="khungSanPham" id="khungThucPham">
              <h3 className="tenKhung" id="dhThucPham">
                * Thực Phẩm Bổ Dưỡng *
              </h3>
              <div className="list">
                {thucPhamBoDuong.map((product) => (
                  <NavLink to={`/${product.id}`} key={product.id}>
                    <div key={product.id} id="item">
                      <div className="img">
                        <img id="Image" src={product.img} alt={product.name} />
                      </div>
                      <h4>{product.name}</h4>
                      <div id="price">
                        {product.price.toLocaleString()} VND{" "}
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
              <div className="seeALL" id="allThucPham">
                <button>Xem tất cả 5 sản phẩm</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
