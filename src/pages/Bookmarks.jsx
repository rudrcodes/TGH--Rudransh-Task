import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuote } from "../features/quotes/quotes";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";

export const Bookmarks = () => {
  // const dispatc
  const allQuotes = useSelector((state) => state.quotes.quotes);
  const dispatch = useDispatch();
  const deleteQuoteFunc = (quoteId) => {
    dispatch(deleteQuote(quoteId));
    // AiFillDelete
    // localStorage.key(userId);
    // console.log(count);
  };
  const Quote = styled.div`
    background-color: #003566;
    /* color: #000; */
    border: none;
    border-radius: 10px;
    padding: 8px 15px;
    text-align: center;
    margin-bottom: 15px;
    line-height: 1.2;

    /* width: 80%; */
  `;
  return (
    <div>
      <h1>My bookmarks</h1>
      {allQuotes.length > 0 ? (
        allQuotes.map((quote) => {
          return (
            <Quote key={quote.id}>
              <h2>{quote.quote}</h2>
              <p>~ {quote.author}</p>
              <button onClick={() => deleteQuoteFunc(quote.id)}>
                <AiFillDelete style={{ fontSize: "1.2rem" }} />
              </button>
            </Quote>
          );
        })
      ) : (
        <h3>No bookmarks</h3>
      )}
    </div>
  );
};
