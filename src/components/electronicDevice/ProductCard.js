import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const handleRating = (rating) => {
    let totalStar = 0;
    for (let i = 0; i < rating.length; i++) {
      totalStar += rating[i] * (i + 1);
    }
    const totalRating = rating.reduce((a, b) => a + b);
    return (totalStar / totalRating).toFixed(1);
  };

  const changeFormPrice = (price) => {
    const stringPrice = price.toLocaleString();
    return stringPrice.replace(",", ".");
  };

  const changeFormLink = (string) => {
    const newString = string.replace("/", "-");
    return newString.split(" ").join("-");
  };

  const changeFormSold = (sold) => {
    if (sold >= 1000) {
      const newSold = Math.floor(sold / 100) / 10;
      return `${newSold.toLocaleString().replace(",", ".")}k`;
    }
    return sold;
  };

  return (
    <Link
      to={`/${changeFormLink(product.desc)}`}
      state={{ data: product }}
      className="productCard"
    >
      <div className="productCard-top">
        <img src={product.imageUrl[0]} alt="" />
        {product.sale !== 0 && (
          <div className="productCard-top-sale">
            <span>{`${product.sale}%`}</span>
            <span>giảm</span>
          </div>
        )}
      </div>
      <div className="productCard-bottom">
        <div className="productCard-bottom-desc">{product.desc}</div>
        <div>
          <div className="productCard-bottom-price">
            <span>đ</span>
            <span>{changeFormPrice(product.price)}</span>
          </div>
          <div
            className={`productCard-bottom-rating-sold ${
              product.rating[0] === 0 && "productCard-bottom-rating-sold-hidden"
            }`}
          >
            <div
              className="productCard-bottom-rating"
              style={{ "--rating": `${handleRating(product.rating)}` }}
            ></div>
            <div className="productCard-bottom-sold">{`Đã bán ${changeFormSold(
              product.sold
            )}`}</div>
          </div>
          <div className="productCard-bottom-location">{product.location}</div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
