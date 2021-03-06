import "./Product-detail.scss";
import Layout from "../../shared/layout/Layout";
import flashSaleLogo from "../../../assets/images/flash.png";
import productNotFoundLogo from "../../../assets/images/product-not-found.jpg";
import Loading from "../../shared/loading/Loading";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/store";

const ProductDetail = () => {
  const params = useParams();
  const [activeColor, setActiveColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Rating UI
  let stars = [];
  if (selectedProduct && selectedProduct.stars) {
    for (let i = 0; i < selectedProduct.stars; i++) {
      stars.push(<FontAwesomeIcon icon="star" color="#EE4D2C" key={i} />);
    }
  }

  const setOrderQuantity = (event) => {
    event.preventDefault();
    setQuantity(+event.target.value);
  };

  const selectColor = (event) => {
    event.preventDefault();
    setActiveColor(event.target.textContent);
  };

  // Link navigate
  const navigate = useNavigate();
  const buy = () => {
    navigate("/account/profile");
  };

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addToCart = () => {
    if (localStorage.getItem("token")) {
      axios
        .post(
          "https://shopee-nodejs.herokuapp.com/api/cart",
          {
            productId: params.productId,
            quantity: quantity,
            color: activeColor,
          },
          {
            headers: {
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          // dispatch({ type: "UPDATE_CART", value: quantity });
          dispatch(cartActions.updateCart(quantity));
        })
        .catch((err) => console.log(err));
    } else {
      navigate("/login");
    }
  };

  const getProductItem = () => {
    setLoading(true);
    axios
      .get(
        `https://shopee-nodejs.herokuapp.com/api/products/${params.productId}`
      )
      .then((res) => {
        if (res.data) setSelectedProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(getProductItem, []);

  return (
    <Layout>
      {loading && <Loading />}
      {selectedProduct ? (
        <section
          className="bg-gray header-spacing p-4"
          style={{ marginTop: "116px" }}
        >
          <div className="bg-white p-4 wrapper d-flex gap-5">
            <img
              className="w-25"
              src={selectedProduct.productImage}
              alt="Hat"
              style={{ height: "350px" }}
            />
            <div style={{ width: "800px" }}>
              <h4 className="text-bold">{selectedProduct.description}</h4>
              <div className="d-flex">
                <span className="pe-4">
                  <ins className="me-1 text-primary">
                    {selectedProduct.stars}
                  </ins>
                  {stars}
                </span>
                <span
                  className="px-4"
                  style={{ borderLeft: "1px solid rgba(0,0,0,.14)" }}
                >
                  <ins>{selectedProduct.rating}</ins>{" "}
                  <span className="text-muted">????nh Gi??</span>
                </span>
                <span
                  className="px-4"
                  style={{ borderLeft: "1px solid rgba(0,0,0,.14)" }}
                >
                  <ins>{selectedProduct.sold}</ins>{" "}
                  <span className="text-muted">???? B??n</span>
                </span>
              </div>
              <div className="bg-gray m-3 ms-0">
                <div className="d-flex align-items-center gap-3 m-3">
                  <span className="text-muted text-decoration-line-through">
                    {selectedProduct.price}
                  </span>
                  <span className="fs-3 text-primary">
                    {selectedProduct.discountPrice}
                  </span>
                  <span className="bg-primary text-white px-1 font-12">
                    {selectedProduct.discountPercentage}% GI???M
                  </span>
                </div>
                <div className="d-flex gap-3 m-3">
                  <img src={flashSaleLogo} alt="Flash Sale logo" />
                  <span>B???T ?????U SAU {selectedProduct.saleHour}</span>
                </div>
              </div>
              <div className="container ps-0">
                <div className="row mb-3">
                  <div className="col-4 text-muted">Combo Khuy???n M??i</div>
                  <div className="col">
                    <button className="combo" type="button">
                      {selectedProduct.combo}
                    </button>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-4 text-muted">V???n Chuy???n</div>
                  <div className="col">
                    Mi???n ph?? v???n chuy???n cho ????n h??ng tr??n{" "}
                    {selectedProduct.freeShippingValue}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-4 text-muted">M??u S???c</div>
                  <div className="col">
                    {selectedProduct.colors.map((color, index) => (
                      <button
                        key={index}
                        className={`btn btn-outline-secondary color-btn text-dark me-3 ${
                          activeColor === color ? "selected-color" : ""
                        }`}
                        onClick={selectColor}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-4 text-muted">S??? L?????ng</div>
                  <div className="col d-flex align-items-center">
                    <button
                      className="btn btn-outline-secondary qty-btn"
                      onClick={() =>
                        setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
                      }
                    >
                      -
                    </button>
                    <span>
                      <input
                        type="number"
                        value={
                          quantity <= selectedProduct.availableNumber
                            ? quantity
                            : selectedProduct.availableNumber
                        }
                        onChange={setOrderQuantity}
                      />
                    </span>
                    <button
                      className="btn btn-outline-secondary qty-btn"
                      onClick={() =>
                        setQuantity((prev) =>
                          prev < selectedProduct.availableNumber
                            ? prev + 1
                            : prev
                        )
                      }
                    >
                      +
                    </button>
                    <span className="ms-3 text-muted">
                      {selectedProduct.availableNumber} s???n ph???m c?? s???n
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-3 m-3 ms-0">
                <button
                  className="btn add-to-cart-btn p-3"
                  type="button"
                  onClick={addToCart}
                >
                  <FontAwesomeIcon
                    className="me-1"
                    icon="fa-solid fa-cart-shopping"
                  />
                  Th??m V??o Gi??? H??ng
                </button>
                <button
                  className="btn buy-now-btn p-3"
                  type="button"
                  onClick={buy}
                  style={{ borderRadius: "0" }}
                >
                  Mua Ngay
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section
          className="d-flex align-items-center justify-content-center"
          style={{ marginTop: "116px" }}
        >
          <img src={productNotFoundLogo} alt="Product Not Found" />
          <p className="text-muted fs-3">
            Xin l???i, ch??ng t??i kh??ng th??? t??m th???y s???n ph???m c???a b???n.
          </p>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
