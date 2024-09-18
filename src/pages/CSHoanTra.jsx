import React from "react";
import Header from "../components/Header";
import FixedHeader from "../components/FixedHeader";
import Footer from "../components/Footer";

const CSHoanTra = () => {
  return (
    <div>
      <Header />
      <div className="sticky">
        <FixedHeader />
      </div>{" "}
      <div className="chinhSach">
        <h3>Chính sách thanh toán</h3>
        <br />
        <p>
          <strong>I. Chính sách đổi trả:</strong>
        </p>
        <p>
          1a: <br />
          - Khách hàng khi đặt mua sản phẩm của CheapMini đều sẽ được cam kết
          đổi trả sản phẩm và nhận về 100% số tiền đã bỏ ra <br />
          1b: Điều kiện đổi trả <br />
          - Hàng hóa được đổi trong vòng 7 ngày tính từ ngày mua hàng. <br />
          - Hàng được đổi phải đảm bảo còn mới 100% chưa được sử dụng, còn
          nguyên nhãn mác, nguyên hộp, phụ kiện, phiếu bảo hành và quà tặng kèm
          theo (nếu có). CheapMini không đổi hàng đã sử dụng hoặc đã kích hoạt
          bảo hành. <br />
          - Hàng hóa chỉ được đổi khi sản phẩm còn hóa đơn mua hàng. <br />
          - Hàng hóa được chọn để đổi phải có giá trị bằng hoặc cao hơn giá trị
          sản phẩm đổi. <br />
          - Không áp dụng đổi hàng với các mặt hàng sữa tươi, sữa bột pha sẵn
          các loại. Sản phẩm mua ở tại siêu thị Cheapmart thì áp dụng đổi/trả
          tại siêu thị đã mua sản phẩm. Sản phẩm mua online thì liên hệ: <br />
          1c: Hoàn tiền <br />- Hàng hóa đủ điều kiện khi mua hàng trực tiếp tại
          cơ sở sẽ được hoàn tiền trong 24h tính từ ngày đổi trả - Hàng hóa đủ
          điều kiện khi mua hàng online sẽ được hoàn từ 7-15 ngày tính từ ngày
          đổi trả
        </p>
        <br />
        <p>
          <strong>II. Chính sách khiếu nại:</strong>
        </p>
        <p>
          - Trường hợp thiếu sản phẩm, sai sản phẩm: Qúy khách nhận hàng vui
          long quay video sản phẩm trước khi sử dụng, cheapmart sẽ giải quyết
          ngay khi nhận khiếu nại <br />
          - Trường hợp rơi vỡ, móp méo, hư hỏng sản phẩm: Cheapmart sẽ giải
          quyết trong 3-5 ngày làm việc do làm rõ trách nhiệm với đơn vị giao
          hàng <br /> - Trường hợp khác… vui lòng email cheapmart56@gmail.com
          hoặc liên hệ hotline: 0796866689 để được giải quyết
        </p>
        <br />
        <p>
          <strong>III: Chính sách bảo hành:</strong>
        </p>
        <p>
          - Đối với các loại sản phẩm ghi rõ thông tin bảo hành trên bao gì sẽ
          được hỗ trợ giải <br /> - Đối với các sản phẩm đồ gia dụng sẽ bảo hành
          theo phiếu bảo hành đính kèm sản phẩm
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CSHoanTra;
