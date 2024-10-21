import React from "react";
import Header from "../components/Header";
import FixedHeader from "../components/FixedHeader";
import Footer from "../components/Footer";

const CSBaoMat = () => {
  return (
    <div>
      <Header />
      <div className="sticky">
        <FixedHeader />
      </div>{" "}
      <div className="chinhSach">
        <h3>Chính sách bảo mật</h3>
        <p>
        1. Mục đích thu thập thông tin cá nhân
          Bạn có thể ghé thăm và duyệt Website của chúng tôi bình thường mà không tiết lộ Thông tin Cá nhân của mình.
          Tuy nhiên, trong trường hợp bạn muốn mua hàng, bạn cần phải đăng ký: (a) họ và tên của bạn, (b) số điện thoại,
          (c) địa chỉ thư điện tử, (d) mật khẩu, (e) ngày sinh; (f) địa chỉ nơi cư trú với Website.
          Mục đích thu nhập thông tin là để chúng tôi có cơ sở để xác nhận đơn hàng của quý vị.


        </p>
        <p>
         2. Phạm vi sử dụng thông tin
           Cung cấp thông tin quảng bá, khuyến mãi.
           Xác nhận đặt hàng hoặc các dịch vụ Quý khách yêu cầu.
           Cải thiện và nâng cao chất lượng dịch vụ bán hàng.

        </p>
        <p>
          3. Những người hoặc tổ chức có thể được tiếp cận với thông tin đó
            Chúng tôi cam kết không chia sẻ hay tiết lộ dữ liệu thông tin của Quý khách cho một bên thứ 3 nào khác. Ngoại trừ các trường hợp sau:
            Các đối tác vận chuyển, truyền thông và xử lý thông tin.
            Các cơ quan nhà nước có thẩm quyền với yêu cầu cụ thể.
            Khi nhận thông tin từ khách hàng cung cấp, chúng tôi đảm bảo an toàn và bảo mật toàn bộ thông tin bằng các công cụ và giải pháp bảo mật tốt nhất.

        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi
          iste quibusdam. Aut quam nostrum distinctio? Quos quidem a veniam
          facilis alias ipsum hic fugiat molestiae obcaecati, doloremque dolorem
          odit.
        </p>
        <p>
          
        </p>
        <p>
         
        </p>
        <p>
          
        </p>
        <p>
          
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CSBaoMat;
