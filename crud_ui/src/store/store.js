// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import loginReducer from "../reducer/loginReducer";
// let store = createStore(loginReducer, applyMiddleware(logger));

// export default store;

// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import logger from "redux-logger";
// import loginReducer from "../reducer/loginReducer";

// // ✅ Apply thunk middleware first
// const store = createStore(loginReducer, applyMiddleware(thunk, logger));

// export default store;


// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/todoSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
