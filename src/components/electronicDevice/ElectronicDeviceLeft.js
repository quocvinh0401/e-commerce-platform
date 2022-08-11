import React, { useState } from "react";
import "./ElectronicDeviceLeft.css";
import ListIcon from "@mui/icons-material/List";
import { allCategory } from "./data";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterCard from "./FilterCard";
import { filterProduct } from "./data";
import { useStateValue } from "../../store/Context";
import actions from "../../store/actions";

function ElectronicDeviceLeft() {
  const [categoryActive, setCatogoryActive] = useState("thiết bị điện tử");
  const [ratingActive, setRatingActive] = useState(0);
  const [range, setRange] = useState({
    minPrice: undefined,
    maxPrice: undefined,
  });

  const [{ filterConditions }, dispatch] = useStateValue();

  const handleClickCategory = (desc) => {
    setCatogoryActive(desc);
    desc === "thiết bị điện tử"
      ? dispatch({
          type: actions.SET_FILTER_MAIN_CATEGORY,
          mainCategory: desc,
        })
      : dispatch({
          type: actions.SET_FILTER_SUB_CATEGORY,
          subCategory: desc,
        });
  };

  const handleRangePrice = () => {
    dispatch({
      type: actions.SET_FILTER_RANGE_PRICE,
      rangePrice: range,
    });
  };

  const handleClickRating = (rating) => {
    if (ratingActive === rating) {
      setRatingActive(0);
      dispatch({
        type: actions.SET_FILTER_RATING,
        rating: 0,
      });
    } else {
      setRatingActive(rating);
      dispatch({
        type: actions.SET_FILTER_RATING,
        rating: rating,
      });
    }
  };

  return (
    <div className="electronicDeviceLeft">
      {/* all category */}
      <div className="electronicDeviceLeft__allCategory">
        <div className="electronicDeviceLeft__allCategory-header">
          <ListIcon />
          <span>tất cả danh mục</span>
        </div>
        <div className="electronicDeviceLeft__allCategory-body">
          <div
            className={`electronicDeviceLeft__mainCategory ${
              categoryActive === allCategory["thiet-bi-dien-tu"].desc &&
              "electronicDeviceLeft__category-active"
            }`}
            onClick={(e) => {
              handleClickCategory(allCategory["thiet-bi-dien-tu"].desc);
            }}
          >
            <span>{allCategory["thiet-bi-dien-tu"].desc}</span>
            <ArrowRightIcon />
          </div>
          {allCategory["thiet-bi-dien-tu"].items.map((item) => (
            <div
              className={`electronicDeviceLeft__subCategory ${
                categoryActive === item &&
                "electronicDeviceLeft__category-active"
              }`}
              key={item}
              onClick={() => {
                handleClickCategory(item);
              }}
            >
              <span>{item}</span>
              <ArrowRightIcon />
            </div>
          ))}
        </div>
      </div>

      {/* filter */}
      <div className="electronicDeviceLeft__filter">
        <div className="electronicDeviceLeft__filter-header">
          <FilterAltOutlinedIcon />
          <span>bộ lọc tìm kiếm</span>
        </div>
        <div className=" electronicDeviceLeft__filter-body">
          {categoryActive !== "thiết bị điện tử" && (
            <FilterCard
              filterCard={filterProduct.types}
              activeCategory={categoryActive}
            />
          )}
          <FilterCard filterCard={filterProduct.locations} />

          <div className="filter__rangePrice">
            <div className="filter__rangePrice-title">khoảng giá</div>
            <div className="filter__rangePrice-body">
              <div>
                <input
                  type="number"
                  placeholder="TỪ"
                  onChange={(e) =>
                    setRange({
                      ...range,
                      minPrice: e.target.value,
                    })
                  }
                  value={range.minPrice}
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="ĐẾN"
                  onChange={(e) =>
                    setRange({
                      ...range,
                      maxPrice: e.target.value,
                    })
                  }
                  value={range.maxPrice}
                />
              </div>
              <button onClick={handleRangePrice}>áp dụng</button>
            </div>
          </div>

          <div className="filter__rating">
            <div className="filter__rating-title">đánh giá</div>
            <div className="filter__rating-body">
              {[5, 4, 3, 2, 1].map((item, index) => (
                <div
                  className={`filter__rating-tag ${
                    ratingActive === item && "filter__rating-active"
                  }`}
                  onClick={() => handleClickRating(item)}
                  key={index}
                >
                  <div className="star" style={{ "--rating": item }}></div>
                  {item < 5 && <span>trở lên</span>}
                </div>
              ))}
            </div>
          </div>
          <button>xóa tất cả</button>
        </div>
      </div>
    </div>
  );
}

export default ElectronicDeviceLeft;
