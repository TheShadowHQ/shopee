import { createStore } from "redux";

const INITIAL_STATE = {
  searchTerm: "",
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        searchTerm: action.value,
      };
    default:
      return state;
  }
};

const store = createStore(searchReducer);

export default store;
