import { createSlice } from "@reduxjs/toolkit";
const quotesInit =
  localStorage.getItem("quotes") != null
    ? JSON.parse(localStorage.getItem("quotes"))
    : [{ id: 0, quote: "dummy quote" }];
const initialState = { quotes: quotesInit };
// const initialState = { quotes: [] };

const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addQuotes: (state, action) => {
      state.quotes.push(action.payload);
      localStorage.setItem("quotes", JSON.stringify(state.quotes));
    },
    deleteQuote: (state, action) => {
      state.quotes = state.quotes.filter(
        (quote) => quote.id !== action.payload
      );
      localStorage.setItem("quotes", JSON.stringify(state.quotes));
    },
  },
});

export default quoteSlice.reducer;
export const { addQuotes, deleteQuote } = quoteSlice.actions;
