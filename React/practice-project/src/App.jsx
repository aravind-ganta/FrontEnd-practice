import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import SearchBar from "./components/SearchBar";

function App() {
  const [count, setCount] = useState(0);
  const bars=[3,10,30,50,70,90,0];
  return (
    <>
    <h1>Progress Bar</h1>
      {bars.map(width=>
        <ProgressBar progress={width}/>
      )}
      <h1>Search Bar</h1>
      <SearchBar />
    </>
  );
}

export default App;
