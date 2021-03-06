import "./Cart.scss";
import Layout from "../../shared/layout/Layout";
import Wrapper from "../../shared/helper/Wrapper";
import Loading from "../../shared/loading/Loading";
import { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCart = () => {
    setLoading(true);
    axios
      .get("https://shopee-nodejs.herokuapp.com/api/cart", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res?.data?.length) {
          setCarts(res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(getCart, []);

  const deleteCart = (id) => {
    axios
      .delete(`https://shopee-nodejs.herokuapp.com/api/cart/${id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        const newCart = carts.filter((item) => item._id !== id);
        setCarts(newCart);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      {loading && <Loading />}
      <main
        className="bg-gray py-4 header-spacing"
        style={{ marginTop: "116px" }}
      >
        <section className="wrapper bg-white flex-column my-2">
          <div className="form-check d-flex align-items-center p-3 ps-5">
            <input
              className="form-check-input me-3"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Happy Home 1977
            </label>
          </div>
          <div className="divider" />
          {carts.map((item) => {
            return (
              <Wrapper key={item._id}>
                <div className="form-check d-flex flex-wrap align-items-center p-3 ps-5 justify-content-between">
                  <div
                    className="d-flex flex-wrap align-items-center"
                    style={{ width: "40%" }}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <div className="product-image-wrapper mx-3">
                      <img
                        src={item.product.productImage}
                        alt=""
                        className="d-block w-100"
                      />
                    </div>
                    <div className="form-check-label product-item-description w-75 text-truncate">
                      {item.product.description}
                    </div>
                  </div>
                  <div className="text-muted">Ph??n lo???i h??ng: {item.color}</div>
                  <div>
                    <del>{item.product.price}</del>
                    &nbsp; <span>{item.product.discountPrice}</span>
                  </div>
                  <div>S??? l?????ng: {item.quantity}</div>
                  <div className="text-primary">
                    {(+item.product.discountPrice * +item.quantity).toString()}
                  </div>
                  <div
                    className="remove-btn"
                    onClick={() => deleteCart(item._id)}
                  >
                    X??a
                  </div>
                </div>
                <div className="divider" />
              </Wrapper>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default Cart;
