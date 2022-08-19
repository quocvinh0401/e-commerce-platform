import React from "react";
import Header from "../header/Header";
import CartItem from "./CartItem";
import "./Cart.css";
import { useStateValue } from "../../store/Context";
import actions from "../../store/actions";
import { useNavigate } from "react-router";

function Cart() {
  const [{ carts, checkedCarts, user }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const handlePriceBill = () => {
    const priceBill = checkedCarts.reduce(
      (total, cart) => total + cart.product.price * cart.amount,
      0
    );
    return priceBill;
  };

  const handleChangeFormPrice = (price) => {
    return price.toLocaleString().replace(",", ".");
  };

  const handleChooseAll = () => {
    dispatch({
      type: actions.CHOOSE_ALL_CART,
    });
  };

  const handleDeleteAll = () => {
    if (carts.length === checkedCarts.length) {
      dispatch({
        type: actions.DELETE_ALL_CART,
      });
      dispatch({
        type: actions.DELETE_ALL_CHECKED_CART,
      });
    }
  };

  const handleBuy = () => {
    console.log({ user: user, products: checkedCarts });
    checkedCarts.length === 0
      ? alert("Chưa chọn sản phẩm")
      : alert("Mua thành công");
  };

  return (
    <div className="cart">
      <div className="cart__header">
        <Header isShowHeaderBottom={false} />
        <div className="cart__header-bottom-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png"
            alt=""
            onClick={() => navigate("/")}
          />
          <span>giỏ hàng</span>
        </div>
      </div>

      <div className="cart__body">
        {carts.length > 0 ? (
          <div className="cart__body-container">
            <div className="cart__body-container-title">
              <div className="cart__body-container-title-left">sản phẩm</div>
              <div className="cart__body-container-title-right">
                <div>đơn giá</div>
                <div>số lượng</div>
                <div>số tiền</div>
                <div></div>
              </div>
            </div>

            <div className="cart__body-container-list">
              {carts.map((cart, index) => (
                <CartItem cart={cart} index={index} key={index} />
              ))}
            </div>

            <div className="cart__bill">
              <div className="cart__bill-left">
                <input
                  type={"checkbox"}
                  onChange={handleChooseAll}
                  checked={
                    carts.length === checkedCarts.length && carts.length > 0
                  }
                />
                <div>{`chọn tất cả (${carts.length})`}</div>
                <span onClick={handleDeleteAll}>xóa</span>
              </div>
              <div className="cart__bill-right">
                <span>{`Tổng thanh toán (${checkedCarts.length} Sản phẩm):`}</span>
                <div>
                  <span>đ</span>
                  <div>{handleChangeFormPrice(handlePriceBill())}</div>
                </div>
                <button onClick={handleBuy}>mua hàng</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart__body-container-empty-cart">
            <img src={require("../../assets/images/empty-cart.png")} alt="" />
            <span>Giỏ hàng của bạn còn trống</span>
            <button onClick={() => navigate("/")}>mua ngay</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
