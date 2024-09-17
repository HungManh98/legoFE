import React from "react";
import { Carousel } from "antd";

const contentStyle = {
//   width: "100%",
  height: "528px",
  margin: "0px 50px 10px 50px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Banner = () => {
  return (
    <div className="banner">
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <img src="https://cheapmart56.com/img/banners/banner0.gif" alt="" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src="https://cheapmart56.com/img/banners/banner1.png" alt="" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src="https://cheapmart56.com/img/banners/banner2.png" alt="" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src="https://cheapmart56.com/img/banners/banner3.png" alt="" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src="https://cheapmart56.com/img/banners/banner4.png" alt="" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src="https://cheapmart56.com/img/banners/banner5.png" alt="" />
          </div>
        </div>
      </Carousel>
      <div id="underBanner">
        <img src="https://cheapmart56.com/img/banners/blackFriday.gif" alt="" />
      </div>
    </div>
  );
};

export default Banner;
