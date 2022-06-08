import "./Search.scss";
import Layout from "../../shared/layout/Layout";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Search = () => {
    const places = ["TP. Hồ Chí Minh", "Quận 1", "Quận 2", " Quận 3", "Quận 4", "Quận 5"];
    const [items, setItems] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const searchTerm = useSelector(state => state.searchTerm)

    const getProducts = () => {
        axios.get("https://shopee-nodejs.herokuapp.com/api/products")
            .then(function (response) {
                if (response?.data?.length) {
                    setItems(response.data);
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    return (
        <Layout>
            <main className="bg-gray py-4 header-spacing d-flex">
                <div className="wrapper">
                    <div className="d-flex w-100">
                        <div className="w-25 px-4">
                            <h6>Bộ lọc tìm kiếm</h6>
                            <p><strong>Nơi bán</strong></p>
                            <ul className="list-group ">
                                {places.map((place, index) => {
                                        return (
                                            <li className="list-group-item bg-gray border-0 p-0" key={index}>
                                                <div className="form-check">
                                                    <input className="form-check-input me-3" type="checkbox" value=""
                                                           id={place}/>
                                                    <label className="form-check-label" htmlFor={place}>
                                                        {place}
                                                    </label>
                                                </div>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                        <div className="w-75">
                            <h6>Kết quả tìm kiếm cho từ khóa <span className="text-primary">{searchTerm}</span></h6>
                            <div
                                className="row hint-wrapper bg-gray d-flex justify-content-between flex-wrap row-cols-6 g-2">
                                {items.map((item, index) => {
                                    return (
                                        <div className="today-hint-item-wrapper bg-white" key={index}>
                                            <div className="position-relative w-100">
                                                <img src={item.productImage} alt="" className="d-block w-100"/>
                                                <div
                                                    className="flash-sale-number position-absolute top-0 end-0 text-center">
                                                    <p className="mb-0 text-danger">
                                                        <small>{item.discountPercentage}%</small></p>
                                                    <p className="text-white">GIẢM</p>
                                                </div>
                                                <div className="position-absolute bottom-0">
                                                    <img src={item.footerImage} alt="" className="d-block w-100"/>
                                                </div>
                                            </div>
                                            <div className="hint-item-footer w-100 mt-2 p-2">
                                                <NavLink to={`/product/${item._id}`} className="text-decoration-none">
                                                    <p className="item-description text-dark">{item.description}</p>
                                                </NavLink>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="text-primary">{item.price}</span>
                                                    <small className="text-muted text-small">Đã bán {item.sold}</small>
                                                </div>
                                            </div>
                                            <div className="bg-primary text-center text-white py-2 similar">
                                                <small>Tìm sản phẩm tương tự</small>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Search;
