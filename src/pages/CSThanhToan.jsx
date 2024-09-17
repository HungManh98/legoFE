import React from "react";
import Header from "../components/Header";
import FixedHeader from "../components/FixedHeader";
import Footer from "../components/Footer";

const CSThanhToan = () => {
  return (
    <div>
      <Header />
      <FixedHeader />
      <div className="chinhSach">
        <h3>Chính sách thanh toán</h3>
        <p>
          Thuy Tien Mart áp dụng 3 hình thức thanh toán bao gồm: Thanh toán khi nhận
          hàng (thanh toán COD), thanh toán trả trước chuyển khoản, thanh toán
          online
        </p>
        <br />
        <p>
          <strong>I. Thanh toán khi nhận hàng (thanh toán COD):</strong>
        </p>
        <p>
          Khách hàng chọn thanh toán tiền mặt khi nhận hàng tại thời điểm thao
          tác đặt hàng trên website <br />
          - Các yêu cầu giao hàng tại nhà cần có thông
          tin chính xác về người nhận, địa chỉ, số điện thoại. Một số trường hợp
          đặc biệt: giá trị đơn hàng lớn, thời gian giao hàng buổi tối, địa chỉ
          giao hàng trong ngõ, khu vực xa trung tâm.. Nhân viên bán hàng sẽ kiểm
          tra và thoả thuận thêm để thống nhất cách thức giao hàng cụ thể.
        </p>
        <br />
        <p>
          <strong>II. Thanh toán trả trước chuyển khoản:</strong>
        </p>
        <p>
          - Khách hàng có thể thanh toán trước 100% giá trị hàng hóa qua một
          trong các tài khoản của Thuytienmart <br /> 
          - Ngay sau khi nhận được tiền thanh
          toán qua chuyển khoản, nhân viên tư vấn sẽ gọi điện thông báo trực
          tiếp đến khách hàng và hẹn ngày giờ giao hàng. Tuỳ theo địa chỉ của
          khách hàng mà thời gian giao hàng có thể từ 12 đến 72 giờ. <br /> 
          - Trong trường hợp giao hàng chậm trễ mà không báo trước, khách hàng có thể
          huỷ đơn hàng, Thuytienmart sẽ hoàn trả toàn bộ số tiền mà khách hàng đã
          trả trong thời gian 07 ngày làm việc.
        </p>
        <br />
        <p>
          <strong>III. Thanh toán qua Thẻ Visa/Master/JCB</strong>
        </p>
        <p>- Khách hàng có thể thanh toán qua cổng thanh toán</p>
        <br />
        <p>
          <strong>IV. Các trường hợp khác:</strong>
        </p>
        <p>
          Khách hàng có yêu cầu chuyển hàng qua bên thứ 3 khác như nhà xe, người
          quen, hoặc đơn vị vận chuyển không ký hợp đồng trực tiếp với
          Thuytienmart. Chi phí và mọi rủi ro trong quá trình vận chuyển do khách
          hàng chịu. Khi nhân viên giao hàng Thuytienmart bàn giao sản phẩm cho bên
          thứ 3, thì khách hàng và đối tác vận chuyển của khách hàng cần xác
          nhận bằng điện thoại, tin nhắn SMS hoặc trên hóa đơn của Thuytienmart.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CSThanhToan;
