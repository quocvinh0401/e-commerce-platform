import React from "react";
import "./Suggestion.css";
import { products } from "./data";

function Suggestion() {
  const handleChangeFormSold = (number) => {
    if (number < 1000) return number;
    let newNumber = Math.round(number / 100) / 10;
    newNumber = "" + newNumber;
    return newNumber.toString().replace(".", ",") + "k";
  };

  const handleChangeFormPrice = (price) => {
    const stringPrice = price.toLocaleString();
    return stringPrice.replace(",", ".");
  };

  return (
    <div className="suggestion">
      <div className="suggestion__header">gợi ý hôm nay</div>
      <div className="suggestion__content">
        {products.map((product, index) => (
          <div className="suggestion__card" key={index}>
            <div className="suggestion__product">
              <div className="suggestion__product-top">
                <img src={product.imgSrc} alt="" />
                {product.islike && (
                  <span className="suggestion__product-top-like">
                    Yêu thích
                  </span>
                )}
                {product.freeShip && (
                  <img
                    className="suggestion__product-top-freeShip"
                    src={require("../../assets/images/suggestion/freeShip.png")}
                  />
                )}
                <div className="suggestion__product-top-sale">
                  <span>{product.sale}%</span>
                  <span>giảm</span>
                </div>
              </div>
              <div className="suggestion__product-bottom">
                <div className="suggestion__product-bottom-desc">
                  {product.desc}
                </div>
                <div className="suggestion__product-bottom-detail">
                  <div>
                    <span>đ</span>
                    <span>{handleChangeFormPrice(product.price)}</span>
                  </div>
                  <span>Đã bán {handleChangeFormSold(product.sold)}</span>
                </div>
              </div>
            </div>
            <div className="suggestion__find-similar-text">
              Tìm sản phẩm tương tự
            </div>
          </div>
        ))}
        {products.map((product, index) => (
          <div className="suggestion__card" key={index}>
            <div className="suggestion__product">
              <div className="suggestion__product-top">
                <img src={product.imgSrc} alt="" />
                {product.islike && (
                  <span className="suggestion__product-top-like">
                    Yêu thích
                  </span>
                )}
                {product.freeShip && (
                  <img
                    className="suggestion__product-top-freeShip"
                    src={require("../../assets/images/suggestion/freeShip.png")}
                  />
                )}
                <div className="suggestion__product-top-sale">
                  <span>{product.sale}%</span>
                  <span>giảm</span>
                </div>
              </div>
              <div className="suggestion__product-bottom">
                <div className="suggestion__product-bottom-desc">
                  {product.desc}
                </div>
                <div className="suggestion__product-bottom-detail">
                  <div>
                    <span>đ</span>
                    <span>{handleChangeFormPrice(product.price)}</span>
                  </div>
                  <span>Đã bán {handleChangeFormSold(product.sold)}</span>
                </div>
              </div>
            </div>
            <div className="suggestion__find-similar-text">
              Tìm sản phẩm tương tự
            </div>
          </div>
        ))}
      </div>
      <div className="suggestion__footer">xem thêm</div>
    </div>
  );
}

export default Suggestion;
