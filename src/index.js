import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./components/page/homepage/Homepage";
import Login from "./components/page/login/Login";
import Cart from "./components/page/cart/Cart";
import Register from "./components/page/register/Register";
import Account from "./components/page/account/Account";
import ProductDetail from "./components/page/product-detail/Product-detail";
import NotFound from "./components/not-found/Not-found";
import AuthRoute from "./components/guard/Auth-route";
import UnAuthRoute from "./components/guard/unAuth-route";
import store from "./store/store";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChangePasswordForm from "./components/ui/change-password-form/Change-password-form";
import MyProfile from "./components/ui/my-profile/My-profile";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path="/account" element={<Account />}>
              <Route path="profile" element={<MyProfile />} />
              <Route path="change-password" element={<ChangePasswordForm />} />
            </Route>
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route element={<UnAuthRoute />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
