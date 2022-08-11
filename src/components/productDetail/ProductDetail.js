import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStateValue } from "../../store/Context";
import "./ProductDetail.css";
import Header from "../header/Header";
import actions from "../../store/actions";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckIcon from "@mui/icons-material/Check";

function ProductDetail(props) {
  const location = useLocation();
  const product = location.state?.data;

  const navigate = useNavigate();

  const [{ user, checkedCarts }, dispatch] = useStateValue();

  const [activeImg, setActiveImg] = useState(0);
  const [count, setCount] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  const handleRating = (rating) => {
    let totalRating = 0;
    for (let i = 1; i < rating.length; i++) {
      totalRating += rating[i] * i;
    }
    const average = totalRating / rating[0];
    return Math.floor((totalRating / rating[0]) * 10) / 10;
  };

  const changeFormPrice = (price) => {
    const stringPrice = price.toLocaleString();
    return stringPrice.replace(",", ".");
  };

  const changeFormSold = (sold) => {
    if (sold >= 1000) {
      const newSold = Math.floor(sold / 100) / 10;
      return `${newSold.toLocaleString().replace(",", ".")}k`;
    }
    return sold;
  };

  const handleAddCart = () => {
    if (!user) {
      navigate("/login");
    } else {
      setShowNotification(true);

      const interval = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      dispatch({
        type: actions.ADD_CART,
        carts: {
          product: product,
          amount: count,
        },
      });
      console.log(checkedCarts.length);
      return () => clearTimeout(interval);
    }
  };

  return (
    <div>
      <div className="productDetail__body">
        <Header />
        <div className="productDetail__container">
          <div className="productDetail__breadcrumb">
            <span>shopee</span>
            <KeyboardArrowRightIcon />
            <span>{product.mainCategory}</span>
            <KeyboardArrowRightIcon />
            <span>{product.subCategory}</span>
            <KeyboardArrowRightIcon />
            <span>{product.type}</span>
            <KeyboardArrowRightIcon />
            <span>{product.desc}</span>
          </div>
          <div className="productDetail__detail">
            <div className="productDetail__detail-left">
              <img
                className="productDetail__detail-left-bigImg"
                src={product.imgSrc[activeImg]}
                alt=""
              />
              <div>
                {product.imgSrc.map((image, index) => (
                  <img
                    className={`productDetail__detail-left-smallImg ${
                      activeImg === index &&
                      "productDetail__detail-left-smallImg--active"
                    }`}
                    src={image}
                    alt=""
                    key={index}
                    onMouseOver={() => setActiveImg(index)}
                  />
                ))}
              </div>
            </div>
            <div className="productDetail__detail-right">
              <div className="productDetail__detail-right-desc">
                {product.desc}
              </div>

              <div className="productDetail__detail-right-status">
                {product.rating[0] !== 0 && (
                  <div className="productDetail__detail-right-rating">
                    <div>{`${handleRating(product.rating)}`}</div>
                    <div
                      style={{ "--rating": `${handleRating(product.rating)}` }}
                    ></div>
                  </div>
                )}
                {product.rating[0] !== 0 ? (
                  <div className="productDetail__detail-right-totalRating">
                    <div>{product.rating[0]}</div>
                    <span>đánh giá</span>
                  </div>
                ) : (
                  <div className="productDetail__detail-right-totalRating">
                    <span>chưa có đánh giá</span>
                  </div>
                )}
                <div className="productDetail__detail-right-sold">
                  <div>{changeFormSold(product.sold)}</div>
                  <span>đã bán</span>
                </div>
              </div>

              <div className="productDetail__detail-right-price">
                <span>đ</span>
                <span>{changeFormPrice(product.price)}</span>
              </div>
              <div className="productDetail__detail-right-amount">
                <span>số lượng</span>
                <div>
                  <div
                    onClick={() => {
                      count > 1 && setCount(count - 1);
                    }}
                  >
                    <RemoveIcon />
                  </div>
                  <div>{count}</div>
                  <div
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <AddIcon />
                  </div>
                </div>
              </div>
              <div className="productDetail__detail-right-location">
                <div>gửi từ:</div>
                <div>{product.location.desc}</div>
              </div>
              <div className="productDetail__detail-right-btn">
                <div onClick={handleAddCart}>
                  <AddShoppingCartIcon />
                  <span>thêm vào giỏ hàng</span>
                </div>
                <div>mua ngay</div>
              </div>
            </div>
          </div>
        </div>
        {showNotification && (
          <div className="productDetail__notification">
            <CheckIcon />
            <div>Sản phẩm đã được thêm vào giỏ hàng</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
