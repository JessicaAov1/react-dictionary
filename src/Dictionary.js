import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Pictures from "./Pictures";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [pictures, setPictures] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    console.log(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPictures(response.data.photos);
  }

  function search() {
    //https://dictionaryapi.dev/

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey = `563492ad6f9170000100000160aff3b6f8184440a24938c45ca29a07`;
    const pexelsApiUrl = ` https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search(props.defaultKeyword);
  }
  if (loaded) {
    return (
      <div className="Dictionary ">
        <h2> What word do you want to look up? </h2>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
            <input type="submit" value="Search"></input>
          </form>
          <div className="hint">
            suggested words : yoga, surf, nature, wine...
          </div>

          <Results results={results} />
          <Pictures pictures={pictures} />
        </section>
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
