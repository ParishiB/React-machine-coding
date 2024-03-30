import React, { useState } from "react";

const App = () => {
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const startTime = (e) => {
    const currentTime = Date.now();
  };

  const resetTime = () => {
    setHours(0);
    setMins(0);
    setSecs(0);
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div className="">
        <div className="">Hours: {hours}</div>
        <div className="">Minutes: {mins}</div>
        <div className="">Seconds: {secs}</div>
      </div>
      <button onClick={startTime}>Start</button>
      <button onClick={resetTime}>Reset</button>
    </div>
  );
};

export default App;
