import styles from "./Navbar.module.scss";
import SearchBar from "./search/SearchBar";
import shopeeLogo from "../../../assets/images/logo-full-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cartActions } from "../../../store/store";

const Navbar = () => {
  const cartNumber = useSelector((state) => {
    return state.cart.quantity;
  });

  const favoriteItems = [
    { key: "thoi-trang-nam", text: "Thời Trang Nam" },
    { key: "ao-da-bong", text: "Áo Đá Bóng" },
    { key: "mu-luoi-trai", text: "Mũ Lưỡi Trai" },
    { key: "dien-thoai", text: "Điện Thoại" },
    { key: "may-tinh-bang", text: "Máy Tính Bảng" },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    if (cartNumber) return;
    // assume API calls to get value for cart number
    dispatch(cartActions.updateCart(2));
  }, []);

  return (
    <nav className="wrapper navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={shopeeLogo} alt="" width="162px" />
        </Link>
        <SearchBar>
          <div className="text-small mt-2">
            {favoriteItems.map((item) => (
              <span className="me-3" key={item.key}>
                {item.text}
              </span>
            ))}
          </div>
        </SearchBar>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <NavLink className="nav-item position-relative" to="/cart">
            <FontAwesomeIcon
              icon="fa-solid fa-cart-shopping"
              className={styles.faCartShopping}
            />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-primary">
              {cartNumber}
            </span>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
