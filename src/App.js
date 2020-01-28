import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [time, setTimeRemaning] = useState(5);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (timerRunning && time > 0) {
      setTimeout(() => {
        setTimeRemaning(prevTime => prevTime - 1);
      }, 1000);
    }
  }, [time, timerRunning]);

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

  function startTimer() {
    setTimerRunning(previosState => true);
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {time}</h4>
      <button onClick={() => startTimer()}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
