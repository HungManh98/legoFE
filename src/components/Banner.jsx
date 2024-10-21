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
        <div>
          <h3 style={https://export-download.canva.com/UXElY/DAGT67UXElY/45/0/0001-4188792080184423480.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20241021%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241021T023955Z&X-Amz-Expires=41679&X-Amz-Signature=82bd1c6b4fba8f8bcc60af806b3b446c5cd12b02b84f66a7b4858f67723fe9bf&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Lego%2520technic.jpg&response-expires=Mon%2C%2021%20Oct%202024%2014%3A14%3A34%20GMT}>1</h3>
        </div>
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
