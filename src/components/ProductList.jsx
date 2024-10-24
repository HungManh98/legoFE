import React from "react";
import { Button, Card } from "antd";
import { FaPlay } from "react-icons/fa";
const { Meta } = Card;

const ProductList = () => {
  const image = "../";
  return (
    <>
      <div className="product-new">
        <h2>Hàng Mới</h2>
        <div className="product-list">
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="/images/img-item.png" />}
          >
            <Meta title="product name" description="mo ta san pham ... " />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="/images/img-item.png" />}
          >
            <Meta title="product name" description="mo ta san pham ... " />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="/images/img-item.png" />}
          >
            <Meta title="product name" description="mo ta san pham ... " />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="/images/img-item.png" />}
          >
            <Meta title="product name" description="mo ta san pham ... " />
          </Card>
        </div>
        <div className="btn">
          <Button>
            Xem Thêm <FaPlay size={15} />
          </Button>
        </div>
      </div>
      <div className="product-new">
        <h2>Bán Chạy Nhất</h2>
        <div className="product-list">
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              />
            }
          >
            <Meta title="product name" description="mo ta san pham ... " />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              />
            }
          >
            <Meta title="product name" description="mo ta san pham ... " />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              />
            }
          >
            <Meta title="product name" description="mo ta san pham ... " />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              />
            }
          >
            <Meta title="product name" description="mo ta san pham ... " />
          </Card>
        </div>
        <div className="btn">
          <Button>
            Xem Thêm <FaPlay size={15} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
