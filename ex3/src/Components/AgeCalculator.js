// src/AgeCalculator.js
import React, { useState } from "react";
import "../AgeCalculator.css";

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthdate) {
      const birthdateTimestamp = new Date(birthdate).getTime();
      const now = Date.now();
      const ageInMilliseconds = now - birthdateTimestamp;
      const ageInYears = Math.floor(
        ageInMilliseconds / (365 * 24 * 60 * 60 * 1000)
      );
      setAge(ageInYears);
    }
  };

  return (
    <div className="age-calculator">
      <label>Enter your birthdate:</label>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <br />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && (
        <p>
          <b>Your age is {age} years.</b>
        </p>
      )}
    </div>
  );
}

export default AgeCalculator;
