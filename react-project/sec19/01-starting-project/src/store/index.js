import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";

import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// const counterIncrement= (state{counter = 0}, action)=>{
//     counter: counter + 1;
// };
