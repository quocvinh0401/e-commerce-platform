import React, { useState } from "react";
import "./ElectronicDeviceRight.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { products, filterProduct } from "./data";
import ProductCard from "./ProductCard";
import { useStateValue } from "../../store/Context";

function ElectronicDeviceRight() {
  const [priceState, setPriceState] = useState();
  const [orderState, setOrderState] = useState([...products]);
  const [orderActive, setOrderActive] = useState("popular");

  const [{ filterConditions }, dispatch] = useStateValue();

  const handleSortOrderPopProduct = () => {
    setOrderActive("popular");
    setPriceState();
    setOrderState([...products]);
  };

  const handleSortOrderLatestProduct = () => {
    setOrderActive("latest");
    setPriceState();
    const newProducts = [...products];
    newProducts.sort((product1, product2) => product2.id - product1.id);
    setOrderState(newProducts);
  };

  const handleSortOrderPriceProduct = () => {
    setOrderActive("price");
    const newProducts = [...products];
    priceState === "lowestToHighest"
      ? newProducts.sort(
          (product1, product2) => product2.price - product1.price
        )
      : newProducts.sort(
          (product1, product2) => product1.price - product2.price
        );
    setOrderState(newProducts);
  };

  const handleOrderState = () => {
    let newOrderState = [...orderState];

    if (filterConditions.location.length > 0) {
      newOrderState = newOrderState.filter((product) =>
        filterConditions.location.includes(product.location)
      );
    }

    if (filterConditions.subCategory) {
      newOrderState = newOrderState.filter(
        (product) => filterConditions.subCategory === product.subCategory
      );
    }

    if (filterConditions.mainCategory) {
      newOrderState = newOrderState.filter(
        (product) => filterConditions.mainCategory === product.mainCategory
      );
    }

    if (filterConditions.rating) {
      newOrderState = newOrderState.filter((product) => {
        let totalRating = 0;
        for (let i = 1; i < product.rating.length; i++) {
          totalRating += product.rating[i] * i;
        }
        const average = totalRating / product.rating[0];
        return filterConditions.rating <= average;
      });
    }
    if (
      filterConditions.rangePrice.minPrice &&
      filterConditions.rangePrice.maxPrice
    ) {
      newOrderState = newOrderState.filter(
        (product) =>
          product.price >= filterConditions.rangePrice.minPrice &&
          product.price <= filterConditions.rangePrice.maxPrice
      );
    }
    if (
      !filterConditions.rangePrice.minPrice &&
      filterConditions.rangePrice.maxPrice
    ) {
      newOrderState = newOrderState.filter(
        (product) => product.price <= filterConditions.rangePrice.maxPrice
      );
    }
    if (
      filterConditions.rangePrice.minPrice &&
      !filterConditions.rangePrice.maxPrice
    ) {
      newOrderState = newOrderState.filter(
        (product) => product.price >= filterConditions.rangePrice.minPrice
      );
    }
    if (filterConditions.types.length > 0) {
      newOrderState = newOrderState.filter((product) =>
        filterConditions.types.includes(product.type)
      );
    }
    return newOrderState;
  };

  const showPriceState = () => {
    if (priceState === "lowestToHighest") {
      return "giá: thấp đến cao";
    } else if (priceState === "highestToLowest") {
      return "giá: cao đến thấp";
    } else {
      return "giá";
    }
  };

  return (
    <div className="electronicDeviceRight">
      <div className="electronicDeviceRight__header">
        <span>Sắp xếp theo</span>
        <div className="electronicDeviceRight__header-options">
          <div
            className={`electronicDeviceRight__header-option ${
              orderActive === "popular" &&
              "electronicDeviceRight__header-option--active"
            }`}
            onClick={handleSortOrderPopProduct}
          >
            phổ biến
          </div>
          <div
            className={`electronicDeviceRight__header-option ${
              orderActive === "latest" &&
              "electronicDeviceRight__header-option--active"
            }`}
            onClick={handleSortOrderLatestProduct}
          >
            mới nhất
          </div>
          <div
            className={`electronicDeviceRight__header-option ${
              orderActive === "price" &&
              "electronicDeviceRight__header-option-price--active"
            }`}
          >
            <div className="electronicDeviceRight__header-option-price-state">
              <span>{showPriceState()}</span>
              <ExpandMoreIcon />
            </div>
            <div className="electronicDeviceRight__header-option-tags">
              <div
                onClick={() => {
                  setPriceState("lowestToHighest");
                  handleSortOrderPriceProduct();
                }}
                className={`electronicDeviceRight__header-option-tag 
                  ${
                    priceState === "lowestToHighest" &&
                    "electronicDeviceRight__header-option-order-active"
                  }`}
              >
                giá: thấp đến cao
              </div>
              <div
                onClick={() => {
                  setPriceState("highestToLowest");
                  handleSortOrderPriceProduct();
                }}
                className={`electronicDeviceRight__header-option-tag 
                ${
                  priceState === "highestToLowest" &&
                  "electronicDeviceRight__header-option-order-active"
                }`}
              >
                giá: cao đến thấp
              </div>
            </div>
          </div>
        </div>
        <div className="electronicDeviceRight__header-page-controller">
          <div className="electronicDeviceRight__header-page">
            <span className="electronicDeviceRight__header-current-page">
              1
            </span>
            <span>/</span>
            <span className="electronicDeviceRight__header-total-page">50</span>
          </div>
          <div className="electronicDeviceRight__header-controller">
            <div className="electronicDeviceRight__header-btn electronicDeviceRight__header-btn--disabled">
              <KeyboardArrowLeftIcon />
            </div>
            <div className="electronicDeviceRight__header-btn">
              <KeyboardArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="electronicDeviceRight__body">
        {handleOrderState().map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ElectronicDeviceRight;
