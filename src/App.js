import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from "./components/page/login/Login";
import Home from "./components/page/homepage/Homepage";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBell, faGlobe } from "@fortawesome/fontawesome-free-solid";
import {
  faCircleQuestion,
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";

library.add(
  fab,
  faFacebook,
  faInstagram,
  faBell,
  faGlobe,
  faCircleQuestion,
  faMagnifyingGlass,
  faShoppingCart
);

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loggedIn, setLoggedIn] = useState();

//   const headerSearchHandler = (searchTerm) => {
//     setSearchTerm(searchTerm);

//     const results = ["product 1", "product 2"];
//     setSearchResults(results);
//   };

//   useEffect(() => {
//     const storedLoggedIn = localStorage.getItem("isLoggedIn"); // Save user log-in state in local storage
//     if (storedLoggedIn === "1") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const loginHandler = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem("isLoggedIn", "1");
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//     localStorage.setItem("isLoggedIn", "0");
//   };

//   // rendering website
//   let content = "";
//   if (isLoggedIn) {
//     content = (
//       <>
//         <Header onHeaderSearch={headerSearchHandler} onLogout={logoutHandler}/>
//         <Carousel />
//         <Category />
//         {searchTerm ? (
//           <Demo searchTerm={searchTerm} searchResults={searchResults} />
//         ) : (
//           ""
//         )}
//       </>
//     );
//   } else {
//     content = <Login onLogin={loginHandler} />;
//   }

//   return <>{content}</>;

//   // const toggleLoggedIn = () => {
//   //   setLoggedIn((prev) => !prev);
//   // };

//   // console.log("app.js");

//   // return (
//   //   <div>
//   //     <h1>This is heading</h1>
//   //     {loggedIn && <p>This is paragraph</p>}
//   //     <button onClick={toggleLoggedIn}>
//   //       Toggle
//   //     </button>
//   //     <Demo />
//   //   </div>
//   // );
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }

  loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    this.setState({
      loggedIn: true,
    });
  };

  logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    this.setState({
      loggedIn: false,
    });
  };

  componentDidMount() {
    const storedUserLoggedIn = localStorage.getItem("isLoggedIn");
    storedUserLoggedIn === "1"
      ? this.setState({ loggedIn: true })
      : this.setState({ loggedIn: false });
  }

  render() {
    return (
      <>
        {/* {this.state.loggedIn ? (
          <Home logoutHeaderBroastCast={this.logoutHandler.bind(this)} />
        ) : (
          <Login loggedInBroadcast={this.loginHandler.bind(this)} />
        )} */}
        <Login></Login>
        <Home></Home>
      </>
    );
  }
}

export default App;
