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
            href="https://www.google.com/maps/place/56+%C4%90.+Ph%C3%BA+Th%E1%BB%8D,+P.+Ph%C3%BA+S%C6%A1n,+Th%C3%A0nh+ph%E1%BB%91+Thanh+H%C3%B3a,+Thanh+Ho%C3%A1/@19.8094494,105.7631451,17z/data=!3m1!4b1!4m6!3m5!1s0x3136f81e152841dd:0xff5684eafafdfd35!8m2!3d19.8094494!4d105.7631451!16s%2Fg%2F11g0tc681d?entry=ttu"
          >
            <IoLocationSharp size={20} />
            56 Phú Thọ 3, Phường Phú Sơn, Thành phố Thanh Hóa, Tỉnh Thanh Hóa,
            Việt Nam
          </a>
        </div>
      </div>

    </>
  );
};

export default Header;
