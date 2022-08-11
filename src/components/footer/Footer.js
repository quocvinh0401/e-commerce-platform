import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__top-item">
            <div className="footer__title">chăm sóc khách hàng</div>
            <ul className="footer__content">
              <li>
                <a href="#">trung tâm trợ giúp</a>
              </li>
              <li>
                <a href="#">shopee blog</a>
              </li>
              <li>
                <a href="#">shopee mall</a>
              </li>
              <li>
                <a href="#">hướng dẫn mua hàng</a>
              </li>
              <li>
                <a href="#">hướng dẫn bán hàng</a>
              </li>
              <li>
                <a href="#">thanh toán</a>
              </li>
              <li>
                <a href="#">shopee xu</a>
              </li>
              <li>
                <a href="#">vận chuyển</a>
              </li>
              <li>
                <a href="#">trả hàng & hoàn tiền</a>
              </li>
              <li>
                <a href="#">chăm sóc khách hàng</a>
              </li>
              <li>
                <a href="#">chính sách bảo hành</a>
              </li>
            </ul>
          </div>
          <div className="footer__top-item">
            <div className="footer__title">về shopee</div>
            <ul className="footer__content">
              <li>
                <a href="#">giới thiệu về shopee việt nam</a>
              </li>
              <li>
                <a href="#">tuyển dụng</a>
              </li>
              <li>
                <a href="#">điều khoản shopee</a>
              </li>
              <li>
                <a href="#">chính sách bảo mật</a>
              </li>
              <li>
                <a href="#">chính hãng</a>
              </li>
              <li>
                <a href="#">kênh người bán</a>
              </li>
              <li>
                <a href="#">flash sales</a>
              </li>
              <li>
                <a href="#">chương trình tiếp thị liên kết shopee</a>
              </li>
              <li>
                <a href="#">liên hệ với truyền thông</a>
              </li>
            </ul>
          </div>
          <div className="footer__top-item">
            <div className="footer__title">thanh toán</div>
            <div className="footer__content"></div>
            <div className="footer__title">đơn vị vận chuyển</div>
            <div className="footer__content"></div>
          </div>
          <div className="footer__top-item">
            <div className="footer__title">theo dõi chúng tôi trên</div>
            <ul className="footer__content">
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/2048px-Facebook_icon_%28black%29.svg.png"
                  alt=""
                />
                <a href="#">facebook</a>
              </li>
              <li>
                <img
                  src="https://www.svgrepo.com/show/364604/instagram-logo-fill.svg"
                  alt=""
                />
                <a href="#">instagram</a>
              </li>
              <li>
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_24873.png"
                  alt=""
                />
                <a href="#">linkedin</a>
              </li>
            </ul>
          </div>
          <div className="footer__top-item footer__top-item-download">
            <div className="footer__title">tải ứng dụng shopee ngay thôi</div>
            <div className="footer__content">
              <img src={require("../../assets/images/footer/qr.png")} alt="" />
              <div>
                <img
                  src={require("../../assets/images/footer/app-store.png")}
                  alt=""
                />
                <img
                  src={require("../../assets/images/footer/google-play.png")}
                  alt=""
                />
                <img
                  src={require("../../assets/images/footer/app-gallery.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-copyright">
            &copy; 2022 Shopee. Tất cả các quyền được bảo lưu.
          </div>
          <div className="footer__bottom-country">
            <div>Quốc gia & Khu vực:</div>
            <div>singapore</div>
            <div>indonesia</div>
            <div>đài loan</div>
            <div>thái lan</div>
            <div>việt nam</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
