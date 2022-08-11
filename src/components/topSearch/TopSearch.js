import React from "react";
import "./TopSearch.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../style.css";
import products from "./data";

import Slider from "react-slick";

function TopSearch() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  return (
    <div className="topSearch multipleItems-slider">
      <div className="topSearch__header">
        <span className="topSearch__title">tìm kiếm hàng đầu</span>
        <div className="topSearch__all">
          <span>xem tất cả </span>
          <ChevronRightIcon />
        </div>
      </div>
      <div className="topSearch__content">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div className="topSearch__product" key={index}>
              <div className="topSearch__product-info">
                <img
                  className="topSearch__product-img"
                  src={product.imgSrc}
                  alt=""
                />
                <img
                  className="topSearch__top-img"
                  src={require("../../assets/images/topSearch/top.png")}
                  alt=""
                />
                <span>Bán {Math.floor(product.sold / 1000)}k+ / tháng</span>
              </div>
              <span className="topSearch__product-desc">{product.desc}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TopSearch;
