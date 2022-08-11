import React from "react";
import "./SearchTrend.css";
import SyncIcon from "@mui/icons-material/Sync";
import searchTrend__products from "./data";

function SearchTrend() {
  return (
    <div className="searchTrend">
      <div className="searchTrend__header">
        <span>xu hướng tìm kiếm</span>
        <div className="searchTrend__seeMore">
          <SyncIcon />
          <span>xem thêm</span>
        </div>
      </div>
      <div className="searchTrend__content">
        {searchTrend__products.map((product, index) => (
          <div className="searchTrend__product" key={index}>
            <div className="searchTrend__detail">
              <div>{product.desc}</div>
              <span>{Math.floor(product.sold / 1000)}k+ sản phẩm</span>
            </div>
            <img src={product.imgSrc} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchTrend;
