import React from "react";
import { useState } from "react";

const App = () => {
  const [emi, setEmi] = useState(0);
  const [time, setTime] = useState(0);
  const [rate, setRate] = useState(0);
  const [ans, setAns] = useState(0);

  const findEmi = (e) => {
    let calculatedEmi = emi * time * rate;
    setAns(calculatedEmi);
  };

  return (
    <>
      <div>
        Loan amount
        <input
          type="text"
          value={emi}
          onChange={(e) => setEmi(e.target.value)}
        />
        Loan tenure
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        interest rate
        <input
          type="text"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <button onClick={findEmi}>Calculate</button>
      {`The EMI is ${ans}`}
    </>
  );
};

export default App;
