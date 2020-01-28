import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [time, setTimeRemaning] = useState(5);

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTimeRemaning(prevTime => prevTime - 1);
      }, 1000);
    }
  }, [time]);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text
      .trim()
      .split(" ")
      .filter(d => d !== "");
    return wordsArr.length;
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {time}</h4>
      <button onClick={() => calculateWordCount(text)}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
