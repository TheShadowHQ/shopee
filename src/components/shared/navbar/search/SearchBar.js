import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const search = (event) => {
    event.preventDefault();
    dispatch({ type: "UPDATE", value: "searchTerm" });
    navigate("/search");
  };

  const updateSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form
      className="d-flex flex-column my-0 mx-5 flex-1"
      style={{ flex: 1 }}
      onSubmit={search}
    >
      <div className="position-relative d-flex align-items-center">
        <input
          className="form-control me-2 p-2"
          type="text"
          placeholder="Săn voucher hoàn 1 triệu xu"
          onChange={updateSearch}
        />
        <button className="btn bg-primary search-btn" type="submit">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>
      {props.children}
    </form>
  );
};

export default SearchBar;
