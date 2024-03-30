import React, { useState } from "react";

const App = () => {
  const [isOtp, setIsOtp] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const generateOtp = () => {
    const randomOtp = Math.floor(Math.random() * 9000 + 1000);
    setGeneratedOtp(randomOtp);
    console.log(randomOtp);
    setIsOtp(true);
  };

  const checkOtp = () => {
    const enteredOtpNumber = parseInt(enteredOtp); // Convert enteredOtp to a number
    if (enteredOtpNumber === generatedOtp) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div>
      {isOtp ? (
        <>
          <input
            type="text"
            placeholder="Enter the OTP"
            value={enteredOtp}
            onChange={(e) => setEnteredOtp(e.target.value)}
          />
          <button onClick={checkOtp}>Submit</button>
          {isCorrect ? "Correct OTP entered" : ""}
        </>
      ) : (
        <button onClick={generateOtp}>Generate OTP</button>
      )}
    </div>
  );
};

export default App;
