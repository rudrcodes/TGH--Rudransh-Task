import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuote } from "../features/quotes/quotes";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Bookmarks = () => {
  const allQuotes = useSelector((state) => state.quotes.quotes);
  const dispatch = useDispatch();
  const deleteQuoteFunc = (quoteId) => {
    dispatch(deleteQuote(quoteId));
  };
  const BookComp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    h3 {
      font-size: 2rem;
    }
  `;

  const Quote = styled.div`
    background: #ff4444; 
    border: none;
    border-radius: 10px;
    padding: 8px 15px;
    text-align: center;
    margin-bottom: 15px;
    line-height: 1.6;
    color: #fff;
    width: 875px;
    button {
      text-align: center;
      background: #fff;
      color: #000;
      transition: all 250ms ease-in-out;
      border: none;
      border-radius: 10px;
      padding: 10px 20px;
      &:hover {
        background-color: #e89797;
      }
    }
    @media (max-width: 768px) {
      width: 60%;
      h2 {
        font-size: 20px;
      }
      button{
        padding: 8px 15px;
        text-align: center;

      }
    }
    /* width: 80%; */
  `;
  return (
    <BookComp>
      {allQuotes.length > 0 ? (
        allQuotes.map((quote) => {
          return (
            <Quote key={quote.id}>
              <h2>{quote.quote}</h2>
              <p>~ {quote.author}</p>
              <button onClick={() => deleteQuoteFunc(quote.id)}>
                <AiFillDelete style={{ fontSize: "1.6rem" }} />
              </button>
            </Quote>
          );
        })
      ) : (
        <h3>No bookmarks</h3>
      )}
    </BookComp>
  );
};
