import React from "react";
import "./FilterCard.css";
import { useStateValue } from "../../store/Context";
import actions from "../../store/actions";

function FilterCard({ filterCard, activeCategory }) {
  const [{ filterConditions }, dispatch] = useStateValue();

  const handleSetFilter = (string) => {
    switch (filterCard.title) {
      case "theo danh mục":
        dispatch({
          type: actions.SET_FILTER_TYPE,
          types: string,
        });
        return;
      case "nơi bán":
        dispatch({
          type: actions.SET_FILTER_LOCATION,
          location: string,
        });
      default:
        return;
    }
  };

  return (
    <div className="filterCard">
      <div className="filterCard__header">{filterCard.title}</div>
      {filterCard.title !== "theo danh mục" ? (
        <div className="filterCard__body">
          {filterCard.items.map((item, index) => (
            <div className="filterCard__tag" key={index}>
              <input type="checkbox" onChange={() => handleSetFilter(item)} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="filterCard__body">
          {filterCard.items[activeCategory].map((item, index) => (
            <div className="filterCard__tag" key={index}>
              <input
                type="checkbox"
                onChange={() => handleSetFilter(item)}
                checked={filterConditions.types.includes(item)}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterCard;
