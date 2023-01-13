import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "../features/quotes/quotes";

const store = configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});

export default store;
