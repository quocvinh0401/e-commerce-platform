import React from "react";
import "./Header.css";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../store/Context";
import actions from "../../store/actions";

function Header({ isSticky = false, isShowHeaderBottom = true }) {
  const [{ user, carts }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch({
      type: actions.SIGN_OUT,
    });
  };

  const handleChangeFormPrice = (price) => {
    return price.toLocaleString().replace(",", ".");
  };

  const changeFormLink = (string) => {
    return string.split(" ").join("-");
  };

  const handleClickSeeCart = () => {
    navigate("/cart");
  };

  return (
    <div className={`header ${isSticky && "header--sticky"}`}>
      <div className="header__top">
        <div className="header__topLeft">
          <span>Kênh Người Bán</span>
          <span>Trở thành Người bán Shopee</span>
          <span>Tải ứng dụng</span>
          <div>
            <span>Kết nối</span>
            <img
              src="https://cmbvn.com.vn/wp-content/uploads/2022/02/d1-2.png"
              alt=""
            />
            <img
              src="https://pnggrid.com/wp-content/uploads/2021/04/instagram-white-logo-768x768.png"
              alt=""
            />
          </div>
        </div>
        <div className="header__topRight">
          <div>
            <NotificationsOutlinedIcon />
            <span>thông báo</span>
          </div>
          <div>
            <HelpOutlineOutlinedIcon />
            <span>hỗ trợ</span>
          </div>
          <div>
            <LanguageOutlinedIcon />
            <span>tiếng việt</span>
            <KeyboardArrowDownOutlinedIcon />
          </div>
          {user ? (
            <div className="header__info">
              <img src={user.user._delegate.photoURL} alt="" />
              <span>{user.user._delegate.displayName}</span>
              <div className="header__info-box">
                <div>tài khoản của tôi</div>
                <div>đơn mua</div>
                <div onClick={signOut}>đăng xuất</div>
              </div>
            </div>
          ) : (
            <>
              <div>đăng ký</div>
              <Link to="/login">đăng nhập</Link>
            </>
          )}
        </div>
      </div>
      {isShowHeaderBottom && (
        <div className="header__bottom">
          <Link to={"/"}>
            <img
              src="https://storage.googleapis.com/ops-shopee-files-live/live/affiliate-blog/2019/05/logo-full-white.png"
              alt=""
            />
          </Link>
          <div className="header__bottomCenter">
            <div className="header__search">
              <input type="text" placeholder="Tìm kiếm..." />
              <SearchOutlinedIcon />
            </div>
            <div className="header__categories">
              <a href="#">Dép</a>
              <a href="#">Áo Phông</a>
              <a href="#">Váy</a>
              <a href="#">Dép Nữ</a>
              <a href="#">Áo Croptop</a>
              <a href="#">Túi Xách Nữ</a>
              <a href="#">Ba Lô</a>
              <a href="#">Áo Khoác</a>
            </div>
          </div>
          <div className="header__bottom-cart">
            <Link to={"/cart"}>
              <LocalGroceryStoreOutlinedIcon />
            </Link>
            {carts.length > 0 && (
              <span className="header__bottom-cart-badge">{carts.length}</span>
            )}
            {carts.length > 0 ? (
              <div className="header__bottom-cart-container">
                <span>sản phẩm mới thêm</span>
                <div className="header__bottom-cart-list">
                  {carts.map((cart, index) => (
                    <Link
                      to={`/${changeFormLink(cart.product.desc)}`}
                      state={{ data: cart.product }}
                      className="header__bottom-cart-item"
                      key={index}
                    >
                      <img src={cart.product.imageUrl[0]} alt="" />
                      <div className="header__bottom-cart-item-desc">
                        {cart.product.desc}
                      </div>
                      <div className="header__bottom-cart-item-price">
                        <span>đ</span>
                        <span>{handleChangeFormPrice(cart.product.price)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <button onClick={handleClickSeeCart}>xem giỏ hàng</button>
              </div>
            ) : (
              <div className="header__bottom-cart-container--empty">
                <img
                  src={require("../../assets/images/empty-cart.png")}
                  alt=""
                />
                <span>Giỏ hàng của bạn còn trống</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
