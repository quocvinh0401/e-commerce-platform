import React from "react";
import "./ShopeeMallBodyRight.css";
import "../style.css";
import { shopeeMall__saleProducts } from "./data";

import Slider from "react-slick";

function ShopeeMallBodyRight() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <div className="shopeeMall__body-right multipleItems-slider">
      <Slider {...settings}>
        {shopeeMall__saleProducts.map((column, index1) => (
          <div className="shopeeMall__column" key={index1}>
            {column.map((item, index2) => (
              <div className="shopeeMall__item" key={index2}>
                <img src={item.imgSrc} />
                <span>{item.desc}</span>
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ShopeeMallBodyRight;
