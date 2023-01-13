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
const Quote = styled.div`
  background-color: #003566;
  /* color: #000; */
  border: none;
  border-radius: 10px;
  padding: 8px 15px;
  text-align: center;
  /* width: 80%; */
  line-height: 1.2;
`;
const QuoteHolder = styled.div`
  text-align: center;
  /* width: 80vw; */
  margin: 30px;
`;
const Cont = styled.div`
  /* background-color: red; */
  height: 60vh;
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
  console.log(saveQuotes);
  const loadOptions = () => {
    const tagArray = [];
    axios
      .get("https://api.quotable.io/tags")
      .then((res) => {
        res.data.map((tagObj) => {
          tagArray.push(tagObj["name"]);
          // console.log(tagObj["name"]);
        });
        console.log(res);
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
        console.log(res.data.content);
        console.log(res.data);
        setAuthor(res.data.author);

        console.log(res.data.tags);
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

        console.log(res.data.content);
        console.log(res.data.tags);
      })
      .catch((err) => {
        alert(err);
      });

    console.log("randomQuote");
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
    console.log(savedQuoteArr);
    savedQuoteArr.push(quote);
    setSaveQuotes([...savedQuoteArr]);
  };
  console.log(saveQuotes);
  return (
    <Cont>
      {/* <Navbar /> */}

      {/* <h2>{onLoadquote}</h2> */}
      <Dropdown
        className="dropdownStyle"
        options={options}
        value={defaultOption}
        placeholder="Select an option"
        onChange={(e) => {
          setTagValue(e.value);
        }}
      />
      {/* <h2>{tagValue}</h2> */}
      <QuoteHolder>
        {quote != undefined ? (
          <Quote>
            <h2>{quote}</h2>
            <p>~ {author}</p>
            <button onClick={() => saveQuote(quote, author)}>Save</button>
          </Quote>
        ) : (
          <Loader/>
        )}
      </QuoteHolder>
      <div>
        <button
          onClick={() => {
            randomQuote();
          }}
        >
          Random Quote
        </button>
      </div>
    </Cont>
  );
};
