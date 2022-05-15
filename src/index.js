import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./components/page/login/Login";
import Profile from "./components/page/account/profile/Profile";
import ChangePassword from "./components/page/account/change-password/Change-password";
import ProductDetail from "./components/page/product-detail/Product-detail";
import Home from "./components/page/homepage/Homepage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/account/profile" element={<Profile/>} />
      <Route path="/account/change-password" element={<ChangePassword/>}></Route>
      <Route path="/product/:productId" element={<ProductDetail/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
