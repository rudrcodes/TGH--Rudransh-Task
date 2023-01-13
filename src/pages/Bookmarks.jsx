import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuote } from "../features/quotes/quotes";
export const Bookmarks = () => {
  // const dispatc
  const allQuotes = useSelector((state) => state.quotes.quotes);
  const dispatch = useDispatch();
  const deleteQuoteFunc = (quoteId) => {
    dispatch(deleteQuote(quoteId));

    // localStorage.key(userId);
    // console.log(count);
  };
  return (
    <div>
      <h1>My bookmarks</h1>
      {allQuotes.length > 0 ? (
        allQuotes.map((quote) => {
          return (
            <div key={quote.id}>
              <h4>{quote.quote}</h4>
              <button onClick={() => deleteQuoteFunc(quote.id)}>
                Delet quote
              </button>
            </div>
          );
        })
      ) : (
        <h3>No bookmarks</h3>
      )}
    </div>
  );
};
