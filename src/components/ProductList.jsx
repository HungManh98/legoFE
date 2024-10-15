import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const ProductList = () => {
  const image = "../";
  return (
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
  );
};

export default ProductList;
