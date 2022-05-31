import "./Product-detail.scss";
import Layout from "../../shared/layout/Layout";
import flashSaleLogo from "../../../assets/images/flash.png";
import productNotFoundLogo from "../../../assets/images/product-not-found.jpg";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

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

  const getProductItem = () => {
    axios
      .get(
        `https://shopee-nodejs.herokuapp.com/api/products/${params.productId}`
      )
      .then((res) => {
        console.log(res);
        if (res.data) setSelectedProduct(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getProductItem, []);

  return (
    <Layout>
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
                  <span className="text-muted">Đánh Giá</span>
                </span>
                <span
                  className="px-4"
                  style={{ borderLeft: "1px solid rgba(0,0,0,.14)" }}
                >
                  <ins>{selectedProduct.sold}</ins>{" "}
                  <span className="text-muted">Đã Bán</span>
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
                    {selectedProduct.discountPercentage}% GIẢM
                  </span>
                </div>
                <div className="d-flex gap-3 m-3">
                  <img src={flashSaleLogo} alt="Flash Sale logo" />
                  <span>BẮT ĐẦU SAU {selectedProduct.saleHour}</span>
                </div>
              </div>
              <div className="container ps-0">
                <div className="row mb-3">
                  <div className="col-4 text-muted">Combo Khuyến Mãi</div>
                  <div className="col">
                    <button className="combo" type="button">
                      {selectedProduct.combo}
                    </button>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-4 text-muted">Vận Chuyển</div>
                  <div className="col">
                    Miễn phí vận chuyển cho đơn hàng trên{" "}
                    {selectedProduct.freeShippingValue}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-4 text-muted">Màu Sắc</div>
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
                  <div className="col-4 text-muted">Số Lượng</div>
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
                      {selectedProduct.availableNumber} sản phẩm có sẵn
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-3 m-3 ms-0">
                <button className="btn add-to-cart-btn p-3" type="button">
                  <FontAwesomeIcon
                    className="me-1"
                    icon="fa-solid fa-cart-shopping"
                  />
                  Thêm Vào Giỏ Hàng
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
            Xin lỗi, chúng tôi không thể tìm thấy sản phẩm của bạn.
          </p>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
