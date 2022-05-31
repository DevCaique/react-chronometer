// Dependecies
import { useState } from "react";

// Style
import "./App.css";

export function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const startStop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    const newIntervalId = setInterval(() => {
      setSeconds((state) => state + 1);
    }, 1000);
    setIntervalId(newIntervalId);
  };

  const reset = () => {
    clearInterval(intervalId);
    setIntervalId(0);
    setSeconds(0);
    setMinutes(0);
    return;
  };

  if (seconds > 60) {
    setSeconds(0);
    setMinutes((state) => state + 1);
  }

  return (
    <div className="application">
      <div className="timer__area">
        <div className="output">
          <span>{String(minutes).padStart(2, "0")}</span>:
          <span>{String(seconds).padStart(2, "0")}</span>
        </div>
        <div className="btn__area">
          <button onClick={startStop}>{intervalId ? "Stop" : "Start"}</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
