import React from "react";
import "./ShopeeMallBodyLeft.css";
import "../style.css";
import { shopeeMall__posters } from "./data";

import Slider from "react-slick";

function ShopeeMallBodyLeft() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <div className="shopeeMall__body-left simple-slider">
      <Slider {...settings}>
        {shopeeMall__posters.map((poster, index) => (
          <div key={index}>
            <img src={poster.imgSrc} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ShopeeMallBodyLeft;
