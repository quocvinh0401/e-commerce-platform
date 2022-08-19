import React from "react";
import "./SaleAdvertisement.css";
import "../style.css";
import { saleAdvertisement__posters, saleAdvertisement__tags } from "./data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SaleAdvertisement() {
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
    <div className="saleAdvertisement simple-slider">
      <div className="saleAdvertisement__container">
        <div className="saleAdvertisement__posters">
          <div className="saleAdvertisement__postersLeft">
            <Slider {...settings}>
              {saleAdvertisement__posters.map((poster, index) => (
                <div className="saleAdvertisement__poster" key={index}>
                  <img src={poster.imgSrc} alt="" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="saleAdvertisement__postersRight"></div>
          <div className="saleAdvertisement__postersRight"></div>
        </div>
        <div className="saleAdvertisement__tags">
          {saleAdvertisement__tags.map((tag, index) => (
            <div className="saleAdvertisement__tag" key={index}>
              <img src={tag.imgSrc} alt="" />
              <span>{tag.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SaleAdvertisement;
