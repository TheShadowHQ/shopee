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
import { Component, useState, useEffect } from "react";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  componentDidMount() {
    const storedUserLoggedIn = localStorage.getItem("isLoggedIn");
    storedUserLoggedIn === "1"
      ? this.setState({ loggedIn: true })
      : this.setState({ loggedIn: false });
  }

  render() {
    return (
      <>
        {this.state.loggedIn ? (
          <Home />
        ) : (
          <Login />
        )}
      </>
    );
  }
}

export default App;
