import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data[0]);
  }

  function search() {
    //https://dictionaryapi.dev/

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);

    search(props.defaultKeyword);
  }
  if (loaded) {
    return (
      <div className="Dictionary ">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
            />
            <input type="submit" value="Search"></input>
          </form>
          <div className="hint">
            suggested words : yoga, surf, nature, wine...
          </div>
          <Results results={results} />
        </section>
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
