import React, { useEffect, useRef, useState } from "react";
import "./LoginBox.css";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { auth, provider } from "../../store/firebase";
import { useStateValue } from "../../store/Context";
import actions from "../../store/actions";
import { useNavigate } from "react-router-dom";

function LoginBox() {
  const [state, dispatch] = useStateValue();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const setStatusBtn = () => {
    if (!email || !password) return "login__btn login__btn-disable";
    return "login__btn";
  };

  const handleClickGg = async () => {
    try {
      const user = await auth.signInWithPopup(provider);
      await dispatch({
        type: actions.SET_USER,
        user: user,
      });
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login__box">
      <div className="login__top">
        <span>Đăng nhập</span>
        <div className="login__withQr">Đăng nhập với mã QR</div>
        <div className="login__qrCode">
          <QrCodeIcon />
        </div>
      </div>
      <form className="login__input">
        <input
          type="text"
          placeholder="Email"
          ref={emailRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button className={setStatusBtn()}>Đăng nhập</button>
      <div className="login__belowLoginBtn">
        <a href="#" alt="">
          Quên mật khẩu
        </a>
        <a href="#" alt="">
          Đăng nhập với SMS
        </a>
      </div>
      <div className="login__or">
        <div className="login__line"></div>
        <span>hoặc</span>
      </div>
      <div className="login__social">
        <div className="login__social-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
            alt=""
          />
          <span>facebook</span>
        </div>
        <div className="login__social-item" onClick={handleClickGg}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
            alt=""
          />
          <span>google</span>
        </div>
        <div className="login__social-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
            alt=""
          />
          <span>apple</span>
        </div>
      </div>
      <div className="login__bottom">
        <span>Bạn mới biết đến Shopee?</span>
        <a href="#">Đăng ký</a>
      </div>
    </div>
  );
}

export default LoginBox;
