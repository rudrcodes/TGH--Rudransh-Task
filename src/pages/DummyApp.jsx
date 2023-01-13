import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Dropdown from "react-dropdown";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import "react-dropdown/style.css";
import { Bookmarks } from "./pages/Bookmarks";
import { Home } from "./pages/Home";
function App() {
  const [quote, setQuote] = useState("random");
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

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/bookmark">
          {/* <Link to="/bookmark" target="_blank"> */}
          Go to My Bookmarks
        </Link>
        <br/>
        <Link to="/">
          {/* <Link to="/bookmark" target="_blank"> */}
          Home
        </Link>
        <Routes>
          <Route exact path="bookmark" element={<Bookmarks />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        {/* <Link to="/bookmark" target="_blank">
          Bookmarks
        </Link>
        <h2>{onLoadquote}</h2>
        <h1>Rudransh aggarwal</h1>
        <Dropdown
          options={options}
          value={defaultOption}
          placeholder="Select an option"
          onChange={(e) => {
            setTagValue(e.value);
          }}
        />
        <h2>{tagValue}</h2>
        <h2>{quote}</h2>
        <hr />
        <button
          onClick={() => {
            randomQuote();
          }}
        >
          Random Quote
        </button> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
