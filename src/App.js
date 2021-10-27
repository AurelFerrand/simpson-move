import React, { useState, useEffect } from "react";
import FixCharacter from "./components/FixCharacter";
import axios from "axios";
import "./index.css";

function App() {
  const [simpson, setSimpson] = useState("");
  const [move, setMove] = useState();

  const [color, setColor] = useState("yellow");

  const handleClick = (e) => {
    setColor("#" + (((1 << 24) * Math.random()) | 0).toString(16));
    setMove(e);
  };

  useEffect(() => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        setSimpson(data[0]);
      });
  }, [move]);

  return (
    <div className="App">
      <button
        style={{ background: color }}
        className="button"
        type="button"
        onClick={handleClick}
      >
        Remove Simpson Character
      </button>
      <FixCharacter simpson={simpson} />
    </div>
  );
}

export default App;
