import React, { useContext, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { Card, Image } from "antd";
import { NavLink } from "react-router-dom";
const { Meta } = Card;
import { IoIosAddCircleOutline } from "react-icons/io";
import { AppContext } from "../App";

const Filter = ({ selectedCategory }) => {
  const { products } = useContext(AppContext);

  // Ensure productsFilter is a valid array
  const productsFilter = Array.isArray(products) ? products : [];

  const filteredProductsFromHead = selectedCategory
    ? productsFilter.filter((product) =>
        product.name.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    : [];

  const doUong = productsFilter.filter(
    (product) => product.category === "đồ uống"
  );
  const banhKeo = productsFilter.filter(
    (product) => product.category === "bánh kẹo"
  );
  const thucPhamBoDuong = productsFilter.filter(
    (product) => product.category === "thực phẩm bổ dưỡng"
  );
  const doGiadung = productsFilter.filter(
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
    return productsFilter
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
      {filteredProductsFromHead.length > 0 && (
        <div className="khungSanPham" id="khungDoUong">
          <h3 className="tenKhung" id="ghTag">
            * Có Phải Bạn Muốn Tìm *
          </h3>
          <div className="list">
            {filteredProductsFromHead.map((product) => (
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
              </div>
            ))}
          </div>
        </div>
      )}

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

      {hasFilters && (
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
                <div id="add">
                  <IoIosAddCircleOutline size={30} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {!hasFilters && (
        <div className="container">
          <div className="Drink">
            <div className="khungSanPham" id="khungDoUong">
              <h3 className="tenKhung" id="ghDoUong">
                * Gian Hàng Đồ Uống *
              </h3>
              <div className="list">
                {doUong.map((product) => (
                  <NavLink to={`/${product.id}`} key={product.id}>
                    <div id="item">
                      <div className="img">
                        <img id="Image" src={product.img} alt={product.name} />
                      </div>
                      <h4>{product.name}</h4>
                      <div id="price">{product.price.toLocaleString()} VND</div>
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
                    <div id="item">
                      <div className="img">
                        <img id="Image" src={product.img} alt={product.name} />
                      </div>
                      <h4>{product.name}</h4>
                      <div id="price">{product.price.toLocaleString()} VND</div>
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
                    <div id="item">
                      <div className="img">
                        <img id="Image" src={product.img} alt={product.name} />
                      </div>
                      <h4>{product.name}</h4>
                      <div id="price">{product.price.toLocaleString()} VND</div>
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
                    <div id="item">
                      <div className="img">
                        <img id="Image" src={product.img} alt={product.name} />
                      </div>
                      <h4>{product.name}</h4>
                      <div id="price">{product.price.toLocaleString()} VND</div>
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
