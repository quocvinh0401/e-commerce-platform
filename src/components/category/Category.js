import React from "react";
import "./Category.css";
import categories from "./data";
import "../style.css";
import { useStateValue } from "../../store/Context";
import actions from "../../store/actions";
import { Link } from "react-router-dom";

import Slider from "react-slick";

function Category() {
  const [state, dispatch] = useStateValue();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 3,
  };

  return (
    <div className="category multipleItems-slider">
      <div className="category__title">danh mục</div>
      <Slider {...settings}>
        {categories.map((catergory__column, index1) => (
          <div className="category__column" key={index1}>
            {catergory__column.map((category__item, index2) => (
              <Link
                to="/thiet-bi-dien-tu"
                className="category__item"
                key={index2}
              >
                <img src={category__item.imgSrc} />
                <span>{category__item.desc}</span>
              </Link>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Category;
