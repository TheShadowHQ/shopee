import styles from "./Navbar.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "./search/Search";
import { useState } from "react";

const Navbar = (props) => {
  let [cartNumber, setCartNumber] = useState(props.shoppingCartNumber);

  const updateCartNumber = (event) => {
    event.preventDefault();
    const newCartNumber = cartNumber + 1;
    setCartNumber(newCartNumber);
  };

  const searchHandler = (searchTerm) => {
    props.onNavbarSearch(searchTerm);
  };

  const favoriteItems = [
    { key: "thoi-trang-nam", text: "Thời Trang Nam" },
    { key: "ao-da-bong", text: "Áo Đá Bóng" },
    { key: "mu-luoi-trai", text: "Mũ Lưỡi Trai" },
    { key: "dien-thoai", text: "Điện Thoại" },
    { key: "may-tinh-bang", text: "Máy Tính Bảng" },
  ];

  return (
    <nav className="wrapper navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="images/logo-full-white.png" alt="" width="162px" />
        </a>
        <Search onSearch={searchHandler}>
          <div className="text-small mt-2">
            {favoriteItems.map((item) => (
              <span className="me-3" key={item.key}>
                {item.text}
              </span>
            ))}
          </div>
        </Search>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item position-relative" onClick={updateCartNumber}>
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className={styles.faCartShopping}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-primary">
              {cartNumber}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
