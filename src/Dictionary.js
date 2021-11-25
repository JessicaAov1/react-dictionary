import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState("");

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response);
  }
  function search(event) {
    event.preventDefault();
    //https://dictionaryapi.dev/

    alert(`Searching for ${keyword} definition`);
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary ">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        <input type="submit" value="Search"></input>
      </form>
      <Results results={results} />
    </div>
  );
}
