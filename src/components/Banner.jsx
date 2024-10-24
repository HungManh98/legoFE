import React from "react";
import { Carousel } from "antd";

const Banner = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="banner">
      <Carousel autoplay afterChange={onChange}>
        <div>
          <img
            style={{ width: "100%", height: "500px" }}
            src="/images/img-banner.jpg"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "500px" }}
            src="/images/img-banner.jpg"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "500px" }}
            src="/images/img-banner.jpg"
            alt="Slide 3"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "500px" }}
            src="/images/img-banner.jpg"
            alt="Slide 4"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
