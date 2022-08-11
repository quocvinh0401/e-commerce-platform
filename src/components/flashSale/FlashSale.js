import React, { useState } from "react";
import "./FlashSale.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import flashSale__products from "./data";
import Slider from "react-slick";
import "../style.css";

function FlashSale() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  const handleChangeFormPrice = (price) => {
    const stringPrice = price.toLocaleString();
    return stringPrice.replace(",", ".");
  };

  return (
    <div className="flashSale">
      <div className="flashSale__header">
        <div className="flashSale__header-left">
          <img
            src={require("../../assets/images/flashSale/logo-flashSale.png")}
          />
          <div className="flashSale__countdown">
            <div className="flashSale__countdown-container flashSale__countdown-hour">
              00
            </div>
            <div className="flashSale__countdown-container flashSale__countdown-minute">
              00
            </div>
            <div className="flashSale__countdown-container flashSale__countdown-second">
              00
            </div>
          </div>
        </div>
        <div className="flashSale__header-right">
          <span>xem tất cả</span>
          <ChevronRightIcon />
        </div>
      </div>
      <div className="flashSale__body multipleItems-slider">
        <Slider {...settings}>
          {flashSale__products.map((product, index) => (
            <div className="flashSale__card" key={index}>
              <div className="flashSale__card-top">
                <img
                  className="flashSale__imgProduct"
                  src={product.imgSrc}
                  alt=""
                />
                <img
                  className="flashSale__imgFreeship"
                  src={require("../../assets/images/flashSale/freeship.png")}
                  alt=""
                />
              </div>
              <div className="flashSale__card-bottom">
                <div className="flashSale__price">
                  <span>đ</span>
                  <span>{handleChangeFormPrice(product.price)}</span>
                </div>
                <div className="flashSale__progress">
                  <span>đã bán {product.sold}</span>
                  <div
                    className="flashSale__progressBar"
                    style={{
                      width: `${
                        ((product.total - product.sold) / product.total) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="flashSale__sales">
                <span>{product.sale}%</span>
                <span>giảm</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FlashSale;
