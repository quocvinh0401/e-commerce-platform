import React from "react";
import "./Login.css";
import LoginBox from "./LoginBox";

function Login() {
  return (
    <div className="login">
      <div className="login__header">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/1200px-Shopee.svg.png"
        />
        <span className="login__text">Đăng nhập</span>
        <span className="login__help">Bạn cần giúp đỡ?</span>
      </div>
      <div className="login__container">
        <LoginBox />
      </div>
    </div>
  );
}

export default Login;
