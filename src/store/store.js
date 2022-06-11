import { createSlice, configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";

const SEARCH_INITIAL_STATE = {
  searchTerm: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: SEARCH_INITIAL_STATE,
  reducers: {
    updateSearch(state, action) {
      console.log(state, action);
      state.searchTerm = action.payload;
    },
  },
});

const CART_INITIAL_STATE = {
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    updateCart(state, action) {
      state.quantity = state.quantity + action.payload;
    },
  },
});

// const searchReducer = (state = SEARCH_INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "UPDATE_SEARCH":
//       return {
//         searchTerm: action.value,
//       };
//     default:
//       return state;
//   }
// };

// const cartReducer = (state = CART_INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "UPDATE_CART":
//       return {
//         quantity: state.quantity + action.value,
//       };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   searchReducer,
//   cartReducer,
// });

// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const searchActions = searchSlice.actions;
export const cartActions = cartSlice.actions;
export default store;
