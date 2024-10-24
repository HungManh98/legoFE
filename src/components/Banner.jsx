import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  margin: 0,
  height: "460px",
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
          <img
            style={contentStyle}
            src="/images/img-banner.jpg"
            alt="Slide 1"
            width="100%"
            height="480px"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="/images/img-banner.jpg"
            alt="Slide 2"
            width="100%"
            height="460px"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="/images/img-banner.jpg"
            alt="Slide 3"
            width="100%"
            height="460px"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="/images/img-banner.jpg"
            alt="Slide 4"
            width="100%"
            height="460px"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
