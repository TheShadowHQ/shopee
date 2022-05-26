import "./Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/Navbar";
import avatar from "../../../assets/images/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const user = {
    username: "quocnguyen",
    shoppingCartNumber: 2,
  };

  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("isLoggedIn", 0);
    navigate("/login");
  };

  return (
    <header className="bg-primary">
      <div className="wrapper">
        <nav className="navbar navbar-expand w-100" style={{ height: "2rem" }}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 left-nav">
            <li className="nav-item">
              <a className="nav-link slash" href="#">
                Kênh người bán
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link slash" href="#">
                Tải ứng dụng
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kết nối
              </a>
              <FontAwesomeIcon icon="fa-brands fa-facebook" />
              <FontAwesomeIcon icon="fa-brands fa-instagram" className="mx-2" />
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mb-2">
            <li className="nav-item">
              <FontAwesomeIcon icon="fa-solid fa-bell" />
              <a className="nav-link active" href="#">
                Thông báo
              </a>
            </li>
            <li className="nav-item">
              <FontAwesomeIcon icon="fa-solid fa-circle-question" />
              <a className="nav-link" href="#">
                Hỗ trợ
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
              >
                <FontAwesomeIcon icon="fa-solid fa-globe" className="me-1" />
                Tiếng Việt
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Tiếng Việt
                </a>
                <a className="dropdown-item" href="#">
                  English
                </a>
              </div>
            </li>

            {isLoggedIn === "0" ? (
              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/register")}>
                  Đăng Ký
                </a>
                <div className="nav-item nav-link-separator"></div>
                <a className="nav-link" onClick={() => navigate("/login")}>
                  Đăng Nhập
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <div>
                  <img src={avatar} alt="avatar" className="avatar circle" />
                </div>
                <div className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    id="logoutDropDown"
                    data-bs-toggle="dropdown"
                  >
                    {user.username}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/account/profile">
                        Tài Khoản Của Tôi
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item">Đơn Mua</a>
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={logout}>
                        Đăng Xuất
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <Navbar shoppingCartNumber={user.shoppingCartNumber} />
    </header>
  );
};

export default Header;
