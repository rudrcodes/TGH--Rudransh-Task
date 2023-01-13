import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import "react-dropdown/style.css";
import { addQuotes } from "../features/quotes/quotes";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import bookmarkImg from "../images/bookmark.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Quote = styled.div`
  background: #ff4444; /* color: #000; */
  border: none;
  color: #fff;
  border-radius: 10px;
  padding: 8px 15px;
  text-align: center;
  /* width: 80%; */

  line-height: 1.6;
  width: 875px;
  & button {
    background: none;
    /* border-radius: 38px; */
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const QuoteHolder = styled.div`
  text-align: center;
  /* width: 80vw; */
  margin: 30px;
`;
const Cont = styled.div`
  /* background-color: red; */
  height: 70vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Home = () => {
  const quotes = useSelector((state) => state.quotes.quotes);
  const dispatch = useDispatch();
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [onLoadquote, setOnLoadQuote] = useState("onLoad");
  //TODO - Bookmark quotes
  const [saveQuotes, setSaveQuotes] = useState([]);
  //Tags List
  const [tagsList, setTagsList] = useState([]);
  // console.log(saveQuotes);
  const loadOptions = () => {
    const tagArray = [];
    axios
      .get("https://api.quotable.io/tags")
      .then((res) => {
        res.data.map((tagObj) => {
          tagArray.push(tagObj["name"]);
          // console.log(tagObj["name"]);
        });
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setTagsList(tagArray);
  };
  const options = tagsList;

  const defaultOption = options[1];
  const [tagValue, setTagValue] = useState(defaultOption);
  useEffect(() => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data.content);
        // console.log(res.data.content);
        // console.log(res.data);
        setAuthor(res.data.author);

        // console.log(res.data.tags);
      })
      .catch((err) => {
        alert(err);
      });
    loadOptions();
  }, []);
  const randomQuote = () => {
    axios
      .get(`https://api.quotable.io/random?tags=${tagValue}`)
      .then((res) => {
        setQuote(res.data.content);
        setAuthor(res.data.author);

        // console.log(res.data.content);
        // console.log(res.data.tags);
      })
      .catch((err) => {
        toast.error(
          "An Error occured!. Try again by selecting the option from the dropdown!!"
        );
      });

    // console.log("randomQuote");
  };
  const savedQuoteArr = [];
  const saveQuote = (quote) => {
    dispatch(
      addQuotes({
        id: quotes[quotes.length - 1] ? quotes[quotes.length - 1].id + 1 : 0,
        quote: quote,
        author: author,
      })
    );
    // console.log(savedQuoteArr);
    savedQuoteArr.push(quote);
    setSaveQuotes([...savedQuoteArr]);
    toast.success("Quote Added in Bookmarks!!");
  };
  // console.log(saveQuotes);
  return (
    <Cont>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <QuoteHolder>
        {quote != undefined ? (
          <Quote>
            <h2>{quote}</h2>
            <p>~ {author}</p>
            <button onClick={() => saveQuote(quote, author)}>
              <img src={bookmarkImg} alt="bookmark" />
            </button>
          </Quote>
        ) : (
          <Loader />
        )}
      </QuoteHolder>
      <Dropdown
        className="dropdownStyle"
        options={options}
        value={defaultOption}
        placeholder="Select an option"
        onChange={(e) => {
          setTagValue(e.value);
        }}
      />
      <div>
        <button
          onClick={() => {
            randomQuote();
          }}
        >
          Next Quote
        </button>
      </div>
    </Cont>
  );
};
