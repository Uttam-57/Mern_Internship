import React, { useState } from "react";
import "../tasks.css";

export const DependentDropdownTask = () => {
  const countryStateData = [
    { country: "India", states: ["Gujarat", "Maharashtra", "Rajasthan"] },
    { country: "USA", states: ["Texas", "California", "Florida"] },
    { country: "Canada", states: ["Ontario", "Quebec", "Alberta"] },
  ];

  const [country, setCountry] = useState("");
  const [stateName, setStateName] = useState("");

  const selectedObj = countryStateData.find((item) => item.country === country);

  return (
    <div className="task-page">
      <h1>Dependent Dropdown</h1>
      <div className="task-form-row">
        <label style={{ marginRight: "8px" }}>Country</label>
        <select onChange={(e) => setCountry(e.target.value)} value={country}>
          <option value="">Select Country</option>
          {countryStateData.map((item) => {
            return (
              <option key={item.country} value={item.country}>
                {item.country}
              </option>
            );
          })}
        </select>
      </div>

      <div className="task-form-row">
        <label style={{ marginRight: "8px" }}>State</label>
        <select onChange={(e) => setStateName(e.target.value)} value={stateName}>
          <option value="">Select State</option>
          {selectedObj?.states.map((state) => {
            return (
              <option key={state} value={state}>
                {state}
              </option>
            );
          })}
        </select>
      </div>

      <h3>
        Selected: {country} {stateName && `- ${stateName}`}
      </h3>
    </div>
  );
};
