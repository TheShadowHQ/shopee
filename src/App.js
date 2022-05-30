import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
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

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;
