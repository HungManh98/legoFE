import React, { useEffect, useRef } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="nonFixHeader">
        <div id="socialMed">
          <div className="socialTaget" id="facebook">
            <FaFacebookF />
          </div>
          <div className="socialTaget" id="twitter">
            <FaTwitter />
          </div>
          <div className="socialTaget" id="google">
            <FaGoogle />
          </div>
          <div className="socialTaget" id="youtube">
            <FaYoutube />
          </div>
        </div>
        <div className="address">
          <a
            target="_blank"
            href="https://www.google.com/maps/place/136+Ph%E1%BA%A1m+V%E1%BA%A5n,+P.+Ng%E1%BB%8Dc+Trang,+Th%C3%A0nh+ph%E1%BB%91+Thanh+H%C3%B3a,+Thanh+Ho%C3%A1/@19.7966963,105.7825172,17z/data=!3m1!4b1!4m5!3m4!1s0x313657e2af63f63f:0x8082d85ee74520ce!8m2!3d19.7966963!4d105.7825172?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D"
          >
            <IoLocationSharp size={20} />
            136 Phạm Vấn, Phường Đông Vệ, Thành phố Thanh Hóa, Việt Nam
          </a>
        </div>
      </div>

    </>
  );
};

export default Header;
