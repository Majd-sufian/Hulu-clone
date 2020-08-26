import React from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import { useDataLayerValue } from "./DataLayer";
import { useState } from "react";
import Results from "./Results";
import requests from "./requests";

function App() {
  const [{ noo3s }, dispatch] = useDataLayerValue();
  const [currentNoo3, setCurrentNoo3] = useState(requests.Trending);

  console.log(currentNoo3);
  return (
    <div className="App">
      <Header />
      <Nav setCurrentNoo3={setCurrentNoo3} />
      <Results currentNoo3={currentNoo3} />
    </div>
  );
}

export default App;

// header --done
// list --done
// rows
