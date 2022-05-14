import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import "./Search.scss";

const Search = (props) => {
  const searchInputRef = useRef();

  const search = (event) => {
    event.preventDefault();
    props.onSearch(searchInputRef.current.value);
    searchInputRef.current.value = "";
  };

  return (
    <form
      className="d-flex flex-column my-0 mx-5"
      style={{ flex: 1 }}
      onSubmit={search}
    >
      <div className="position-relative d-flex align-items-center">
        <input
          className="form-control me-2 p-2"
          type="search"
          placeholder="Săn voucher hoàn 1 triệu xu"
          ref={searchInputRef}
        />
        <button className="btn bg-primary search-btn" type="submit">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>
      {props.children}
    </form>
  );
};

export default Search;
