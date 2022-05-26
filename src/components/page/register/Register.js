import "./Register.scss";
import logo from "../../../assets/images/logo.png";
import { useState, useEffect } from "react";
import Footer from "../../shared/footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState();
    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

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

    const register = () => {
        
    };

    return (
        <>
            <nav className="container navbar d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center brand">
                    <img src={logo} alt="logo"/>
                    <h2>Đăng ký</h2>
                </div>
            </nav>
            <main className="bg-primary">
                <section className="container">
                    <form className="form-container" autoComplete="off" style={{height: "400px"}}>
                        <div className="d-flex justify-content-between">
                            <p className="text-heading">Đăng ký</p>
                        </div>
                        <div className="form-input">
                            <input type="text" name="username" placeholder="Email / SDT / Tên đăng nhập"
                                   onBlur={emailChangeHandler}
                                   className={`form-control ${isEmailValid ? "is-valid" : "is-invalid"}`}
                            />
                            <div className="invalid-feedback">
                                This email is invalid.
                            </div>
                        </div>
                        <div className="form-input">
                            <input type="password" name="password" placeholder="Mật khẩu" onBlur={passwordChangeHandler}
                                   className={`form-control ${isPasswordValid ? "is-valid" : "is-invalid"}`}/>
                            <div className="invalid-feedback">
                                Password must have at least 6 characters
                            </div>
                        </div>
                        <button type="button" className="login-button bg-primary" onClick={register}
                                disabled={!isEmailValid || !isPasswordValid}>ĐĂNG KÍ
                        </button>
                    </form>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Register;
