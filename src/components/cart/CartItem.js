import React from "react";
import "./CartItem.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useStateValue } from "../../store/Context";
import actions from "../../store/actions";
import { Link } from "react-router-dom";

function CardItem({ cart, index }) {
  const [{ carts, checkedCarts }, dispatch] = useStateValue();

  const handleChangeFormPrice = (price) => {
    return price.toLocaleString().replace(",", ".");
  };

  const handleIncrease = () => {
    dispatch({
      type: actions.INCREASE,
      indexCart: index,
    });
  };

  const handleDecrease = () => {
    if (cart.amount > 0) {
      dispatch({
        type: actions.DECREASE,
        indexCart: index,
      });
    }
  };

  const handleDelete = () => {
    dispatch({
      type: actions.DELETE_CART,
      carts: index,
    });
    dispatch({
      type: actions.DELETE_CHECKED_CART,
      checkedCart: cart,
    });
  };

  const hanleSetCheckedCarts = () => {
    dispatch({
      type: actions.SET_CHECKED_CARTS,
      checkedCart: cart,
    });
  };

  const changeFormLink = (string) => {
    const newString = string.replace("/", "-");
    return string.split(" ").join("-");
  };

  return (
    <div className="cart__item">
      <div className="cart__item-left">
        <input
          type={"checkbox"}
          onChange={hanleSetCheckedCarts}
          checked={checkedCarts.some(
            (checkedCart) => checkedCart.product.id === cart.product.id
          )}
        />
        <Link
          to={`/${changeFormLink(cart.product.desc)}`}
          state={{ data: cart.product }}
        >
          <img src={cart.product.imageUrl[0]} alt="" />
          <span>{cart.product.desc}</span>
        </Link>
      </div>

      <div className="cart__item-right">
        <div className="cart__item-right-unitPrice">
          <span>đ</span>
          {handleChangeFormPrice(cart.product.price)}
        </div>
        <div className="cart__item-right-count">
          <div>
            <div
              className="cart__item-right-count-btn"
              onClick={handleDecrease}
            >
              <RemoveIcon />
            </div>
            <span>{cart.amount}</span>
            <div
              className="cart__item-right-count-btn"
              onClick={handleIncrease}
            >
              <AddIcon />
            </div>
          </div>
        </div>
        <div className="cart__item-right-totalPrice">
          <span>đ</span>
          {handleChangeFormPrice(cart.product.price * cart.amount)}
        </div>
        <span className="cart__item-right-delete" onClick={handleDelete}>
          xóa
        </span>
      </div>
    </div>
  );
}

export default CardItem;
