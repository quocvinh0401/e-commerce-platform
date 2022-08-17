import React, { useEffect, useState } from "react";
import "./Category.css";
// import categories from "./data";
import "../style.css";
import { Link } from "react-router-dom";
import axios from "axios";

import Slider from "react-slick";

function Category() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoriesData = async () => {
      try {
        const response = await axios.get(
          "https://62fcb417b9e38585cd441718.mockapi.io/api/categories"
        );
        await setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    categoriesData();
  }, []);

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
        {categories.map((catergory__column, index) => (
          <div className="category__column" key={index}>
            {catergory__column.map((category__item) => (
              <Link
                to="/thiet-bi-dien-tu"
                className="category__item"
                key={category__item.id}
              >
                <div>
                  <img src={category__item.imageUrl} />
                  <div className="category__item-gray-circle"></div>
                </div>
                <span>{category__item.category}</span>
              </Link>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Category;
