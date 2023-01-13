import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import "react-dropdown/style.css";
import { addQuotes } from "../features/quotes/quotes";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";

export const Home = () => {
  const quotes = useSelector((state) => state.quotes.quotes);
  const dispatch = useDispatch();
  const [quote, setQuote] = useState(null);
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
  // loadOptions();
  const options = tagsList;
  // const options = [
  //   "athletics",
  //   "business",
  //   "change",
  //   "character",
  //   "education",
  //   "film",
  //   "happiness",
  // ];
  const defaultOption = options[1];
  const [tagValue, setTagValue] = useState(defaultOption);
  useEffect(() => {
    axios
      // .get(`https://api.quotable.io/random?tags=${tagValue}`)
      .get("https://api.quotable.io/random")
      .then((res) => {
        setOnLoadQuote(res.data.content);
        console.log(res.data.content);
        console.log(res.data.tags);
        // console.log(res.tags);
      })
      .catch((err) => {
        alert(err);
      });
    loadOptions();
  }, []);
  const randomQuote = () => {
    axios
      .get(`https://api.quotable.io/random?tags=${tagValue}`)
      // .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data.content);
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
      })
    );
    console.log(savedQuoteArr);
    // console.log(`saved Quote : ${quote}`);
    savedQuoteArr.push(quote);
    setSaveQuotes([...savedQuoteArr]);
  };
  console.log(saveQuotes);
  return (
    <>
    
      {/* <Link to="/bookmark" >
       Go to My Bookmarks
      </Link>
         <Link to="/bookmark" >
       Go to My Bookmarks
      </Link> */}
      <h2>{onLoadquote}</h2>
      <Dropdown
        options={options}
        value={defaultOption}
        placeholder="Select an option"
        onChange={(e) => {
          setTagValue(e.value);
        }}
      />
      <h2>{tagValue}</h2>
      <div>
        {quote != undefined ? (
          <div>
            <h2>{quote}</h2>
            <button onClick={() => saveQuote(quote)}>Save</button>
          </div>
        ) : (
          <h2>Null</h2>
        )}
      </div>
      {/* <div>
        {quote != undefined ? (
            
          <div>
            <h2>{quote}</h2>
            <button onClick={() => saveQuote(quote)}>Save</button>
          </div>
        ) : (
          <p>Null</p>
        )}
      </div> */}
      <hr />
      <button
        onClick={() => {
          randomQuote();
        }}
      >
        Random Quote
      </button>
    </>
  );
};
