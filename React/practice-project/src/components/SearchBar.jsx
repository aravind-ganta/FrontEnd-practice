/**This file contains code related to Auto-Complete Search Bar functionality */
import React, { useEffect, useState } from "react";
import "./SearchBar.css";
const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});
  const fetchData = async () => {
    if (cache[input]) {
      console.log("cache hit");
      setResults(cache[input]);
      return;
    }
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const json = await data.json();
    setResults(json?.recipes);
    setCache({ ...cache, [input]: json?.recipes });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <>
      <div>
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        ></input>
      </div>
      {showResults && (
        <div className="results-container">
          {results.map((r) => {
            return (
              <div key={r.id} className="result">
                {r.name}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SearchBar;
