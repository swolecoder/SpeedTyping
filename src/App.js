import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const START_TIME = 5;

  const [text, setText] = useState("");
  const [time, setTimeRemaning] = useState(START_TIME);
  const [timerRunning, setTimerRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (timerRunning && time > 0) {
      setTimeout(() => {
        setTimeRemaning(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      endGame();
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
    setTimeRemaning(START_TIME);
    setText("");
    setWordCount(0);
  }

  function endGame() {
    setTimerRunning(false);
    setWordCount(calculateWordCount(text));
  }

  let enableArea = timerRunning === true ? true : false;

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} disabled={!timerRunning} />
      <h4>Time remaining: {time}</h4>
      <button onClick={startTimer} disabled={timerRunning}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
