import React from "react";
import Header from "../components/Header";
import FixedHeader from "../components/FixedHeader";
import Footer from "../components/Footer";

const CSThanhToan = () => {
  return (
    <div>
      <Header />
      <div className="sticky">
        <FixedHeader />
      </div>{" "}
      <div className="chinhSach">
        <h3>Chính sách thanh toán</h3>
        <p>
          1. Thanh toán khi nhận hàng (COD):
            Quý khách có thể thanh toán trực tiếp cho nhân viên giao hàng khi nhận hàng.
            Áp dụng cho các đơn hàng giao trong nội thành và một số tỉnh thành khác theo phạm vi hỗ trợ của đơn vị vận chuyển.

        </p>
        <p>
          2. Thanh toán chuyển khoản ngân hàng:
            Khách hàng có thể thanh toán trước qua chuyển khoản ngân hàng nội địa.
            Thông tin tài khoản ngân hàng sẽ được shop cung cấp qua tin nhắn khi xác nhận đơn hàng.
            Sau khi hoàn tất chuyển khoản, quý khách vui lòng gửi ảnh chụp biên lai hoặc thông báo xác nhận giao
            dịch thành công để shop xác nhận và tiến hành đóng gói hàng.

        </p>
        <p>
          Lưu ý:
            Kiểm tra kỹ thông tin chuyển khoản (số tài khoản, nội dung chuyển khoản) để tránh sai sót.
            Đối với thanh toán chuyển khoản, shop chỉ xử lý đơn hàng sau khi nhận được thanh toán.

        </p>
        <p>
          3. Hoàn tiền
            Trong trường hợp đơn hàng bị hủy hoặc có sự cố không thể giao hàng, shop sẽ hoàn lại tiền cho khách qua phương thức chuyển khoản.
            Thời gian hoàn tiền dự kiến: Từ 3-5 ngày làm việc kể từ khi xác nhận hoàn tiền.

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

export default CSThanhToan;
