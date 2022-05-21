import "./Login.scss";
import logo from "../../../assets/images/logo.png";
import { useState, useEffect } from "react";
import Footer from "../../shared/footer/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState();
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState();

  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("isLoggedIn", "1");
    navigate("/");
  };

  useEffect(() => {
    setIsEmailValid(email.includes("@"));
    setIsPasswordValid(password.length >= 6);
  }, [email, password]);

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <nav className="container navbar d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center brand">
          <img src={logo} alt="logo" />
          <h2>Đăng nhập</h2>
        </div>
        <div className="text-primary">Cần trợ giúp?</div>
      </nav>
      <main className="bg-primary">
        <section className="container">
          <form className="form-container">
            <div className="d-flex justify-content-between">
              <p className="text-heading">Đăng nhập</p>
              <svg width="40" height="40" fill="none" className="_3F92IZ">
                <g clipPath="url(#clip0)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z"
                    fill="#EE4D2D"
                  />
                  <path d="M37 37H22.5v3H40V22.5h-3V37z" fill="#EE4D2D" />
                  <path
                    d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z"
                    fill="#EE4D2D"
                  />
                  <path fill="#fff" d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path fill="#fff" d="M0 0h40v40H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="form-input">
              <input
                type="text"
                name="username"
                placeholder="Email / SDT / Tên đăng nhập"
                onChange={emailChangeHandler}
                className={`form-control ${
                  isEmailValid ? "is-valid" : "is-invalid"
                }`}
              />
              <div className="invalid-feedback">This email is invalid.</div>
            </div>
            <div className="form-input">
              <input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                onChange={passwordChangeHandler}
                className={`form-control ${
                  isPasswordValid ? "is-valid" : "is-invalid"
                }`}
              />
              <div className="invalid-feedback">
                Password must have at least 6 characters
              </div>
            </div>
            <button
              type="button"
              className="login-button bg-primary"
              onClick={login}
              disabled={!isEmailValid || !isPasswordValid}
            >
              ĐĂNG NHẬP
            </button>
            <div className="d-flex justify-content-between">
              <span className="text-secondary text-small">Quên mật khẩu</span>
              <span className="text-secondary text-small">
                Đăng nhập với SMS
              </span>
            </div>
            <div className="text-center text-muted d-flex align-items-center justify-content-between">
              <hr />
              <span className="text-muted" style={{ margin: "0 10px" }}>HOẶC</span>
              <hr />
            </div>
            <div className="social text-center">
              <button>
                <span className="social-icon facebook" />
                Facebook
              </button>
              <button>
                <span className="social-icon google" />
                Google
              </button>
              <button>
                <span className="social-icon apple" />
                Apple
              </button>
            </div>
            <div className="text-center">
              <span className="text-muted mx-2">Bạn mới biết đến Shopee?</span>
              <span className="text-primary">Đăng ký</span>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
