import React, { useState } from "react";

const TipCalculator = () => {
  // State variables for user inputs
  const [billAmount, setBillAmount] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [serviceRating, setServiceRating] = useState("20"); // Default 20% tip
  const [results, setResults] = useState(null); // Stores calculated values

  // Function to calculate tip and total bill
  const calculateTip = () => {
    if (!billAmount || !numPeople || numPeople <= 0) {
      alert("Please enter valid inputs.");
      return;
    }

    const tipPercentage = parseFloat(serviceRating) / 100;
    const tipAmount = parseFloat(billAmount) * tipPercentage;
    const totalBill = parseFloat(billAmount) + tipAmount;
    const perPerson = totalBill / parseInt(numPeople);

    setResults({
      tipAmount: tipAmount.toFixed(2),
      totalBill: totalBill.toFixed(2),
      perPerson: perPerson.toFixed(2),
    });
  };

  return (
    <div className="tip-calculator">
      <h2>Tip Calculator</h2>
      <div className="form-group">
        <label>Total Bill ($):</label>
        <input
          type="number"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          placeholder="Enter bill amount"
        />
      </div>

      <div className="form-group">
        <label>Number of People:</label>
        <input
          type="number"
          value={numPeople}
          onChange={(e) => setNumPeople(e.target.value)}
          placeholder="Enter number of people"
        />
      </div>

      <div className="form-group">
        <label>Service Rating:</label>
        <select value={serviceRating} onChange={(e) => setServiceRating(e.target.value)}>
          <option value="30">Outstanding - 30%</option>
          <option value="20">Good - 20%</option>
          <option value="15">Ok - 15%</option>
          <option value="10">Bad - 10%</option>
          <option value="5">Terrible - 5%</option>
        </select>
      </div>

      <button className="calculate-btn" onClick={calculateTip}>
        Calculate
      </button>

      {results && (
        <div className="results">
          <h3>Results:</h3>
          <p>Total Tip: ${results.tipAmount}</p>
          <p>Total Bill (Including Tip): ${results.totalBill}</p>
          <p>Amount per Person: ${results.perPerson}</p>
        </div>
      )}
    </div>
  );
};

export default TipCalculator;
