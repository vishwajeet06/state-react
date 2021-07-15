import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="app">
      <h1>This is my counter application</h1>
      <h3>Value of score is {score}</h3>
      <div>
        <button
          onClick={() => {
            score <= 24 ? setScore(score + 1) : setScore(score);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            score > 0 ? setScore(score - 1) : setScore(0);
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setScore(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
