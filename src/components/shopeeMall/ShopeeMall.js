import React from "react";
import "./ShopeeMall.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ShopeeMallBodyLeft from "./ShopeeMallBodyLeft";
import ShopeeMallBodyRight from "./ShopeeMallBodyRight";

function ShopeeMall() {
  return (
    <div className="shopeeMall">
      <div className="shopeeMall__header">
        <span className="shopeeMall__title">shopee mall</span>
        <div className="shopeeMall__slogans">
          <div className="shopeeMall__slogan">
            <img
              src={require("../../assets/images/shopeeMall/mien-phi-tra-hang.png")}
              alt=""
            />
            <span>7 ngày miễn phí trả hàng</span>
          </div>
          <div className="shopeeMall__slogan">
            <img
              src={require("../../assets/images/shopeeMall/hang-chinh-hang.png")}
              alt=""
            />
            <span>hàng chính hãng 100%</span>
          </div>
          <div className="shopeeMall__slogan">
            <img
              src={require("../../assets/images/shopeeMall/mien-phi-van-chuyen.png")}
              alt=""
            />
            <span>miễn phí vận chuyển</span>
          </div>
        </div>
        <div className="shopeeMall__all">
          <span>xem tất cả</span>
          <KeyboardArrowRightIcon />
        </div>
      </div>
      <div className="shopeeMall__body">
        <ShopeeMallBodyLeft />
        <ShopeeMallBodyRight />
      </div>
    </div>
  );
}

export default ShopeeMall;
