import "./Login.scss";
import logo from "../../../assets/images/logo.png";
import Footer from "../../shared/footer/Footer";
import { Component } from "react";

class Login extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isEmailValid: false,
      password: "",
      isPasswordValid: false,
    };
  }

  // const [isEmailValid, setIsEmailValid] = useState(false);
  // const [isPasswordValid, setIsPasswordValid] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const emailRef = useRef();
  // const passwordRef = useRef();

  login = (event) => {
    event.preventDefault();
    this.props.loggedInBroadCast(true);
  };

  componentDidMount() {
    console.log(this.state.email, this.state.password);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.email !== this.state.email) {
      this.setState({
        isEmailValid: this.state.email.includes("@"),
      });
    }
    if (prevState.password !== this.state.password) {
      this.setState({
        isPasswordValid: this.state.password.length >= 6,
      });
    }
  }

  componentWillMount() {
    console.log("Unmount login.js");
  }

  // input validation
  // useEffect(() => {
  //   setIsEmailValid(email.trim().includes("@"));
  //   setIsPasswordValid(password.trim().length >= 6);
  // }, [email, password]);

  emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  passwordHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    return (
      <>
        <nav className="navbar bg-light align-items-center justify-content-around">
          <div className="d-flex align-items-center brand">
            <img src={logo} alt="logo" />
            <h2 className="text-dark fw-normal fs-3">Đăng nhập</h2>
          </div>
          <a className="nav-link text-primary">Bạn cần giúp đỡ?</a>
        </nav>

        <main className="bg-primary">
          <section className="container">
            <form className="form-container" onSubmit={this.login.bind(this)}>
              <div className="d-flex justify-content-between">
                <p className="text-heading">Đăng nhập</p>
                <svg width="40" height="40" fill="none" className="_3F92IZ">
                  <g clipPath="url(#clip0)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z"
                      fill="#EE4D2D"
                    ></path>
                    <path
                      d="M37 37H22.5v3H40V22.5h-3V37z"
                      fill="#EE4D2D"
                    ></path>
                    <path
                      d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z"
                      fill="#EE4D2D"
                    ></path>
                    <path
                      fill="#fff"
                      d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <path fill="#fff" d="M0 0h40v40H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="form-input input-group has-validation">
                <input
                  className={`form-control ${
                    this.isEmailValid ? "is-valid" : "is-invalid"
                  }`}
                  type="text"
                  name="username"
                  placeholder="Email / SDT / Tên đăng nhập"
                  // ref={emailRef}
                  onChange={this.emailHandler.bind(this)}
                />
                {!this.isEmailValid && (
                  <div className="invalid-feedback">Email không hợp lệ</div>
                )}
              </div>
              <div className="form-input input-group has-validation">
                <input
                  className={`form-control ${
                    this.isPasswordValid ? "is-valid" : "is-invalid"
                  }`}
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  // ref={passwordRef}
                  onChange={this.passwordHandler.bind(this)}
                />
                {!this.isPasswordValid && (
                  <div className="invalid-feedback">
                    Mật khẩu phải chứa hơn 6 ký tự.
                  </div>
                )}
              </div>
              <button className="login-button bg-primary">ĐĂNG NHẬP</button>
              <div className="d-flex justify-content-between">
                <span className="text-secondary text-small">Quên mật khẩu</span>
                <span className="text-secondary text-small">
                  Đăng nhập với SMS
                </span>
              </div>
              <div className="text-center text-muted d-flex align-items-center justify-content-between">
                <hr />
                <span className="mx-3">HOẶC</span>
                <hr />
              </div>
              <div className="social text-center">
                <button>
                  <div className="social-icon facebook"></div>Facebook
                </button>
                <button>
                  <div className="social-icon google"></div> Google
                </button>
                <button>
                  <div className="social-icon apple"></div>Apple
                </button>
              </div>
              <div className="text-center">
                <span className="text-muted me-1">
                  Bạn mới biết đến Shopee?
                </span>
                <span className="text-primary">Đăng ký</span>
              </div>
            </form>
          </section>
        </main>
        <Footer></Footer>
      </>
    );
  }
}

export default Login;
