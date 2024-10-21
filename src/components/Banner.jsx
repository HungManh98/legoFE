import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "460px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Banner = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="banner">
      <Carousel autoplay afterChange={onChange}>
        <div
          <h3 style={contentStyle}>1</h3>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};
export default Banner;
