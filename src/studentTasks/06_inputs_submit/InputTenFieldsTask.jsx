import React, { useState } from "react";
import "../tasks.css";

export const InputTenFieldsTask = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    college: "",
    skills: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    setSubmitted(true);
  };

  return (
    <div className="task-page">
      <h1>10 Inputs + Submit + Output</h1>
      {Object.keys(formData).map((key) => {
        return (
          <div className="task-form-row" key={key}>
            <label style={{ marginRight: "8px", textTransform: "capitalize" }}>{key}</label>
            <input
              type={key === "password" ? "password" : "text"}
              name={key}
              onChange={changeHandler}
            />
          </div>
        );
      })}
      <button onClick={submitHandler}>Submit</button>

      {submitted && (
        <div className="task-box">
          <h2>Output Section</h2>
          {Object.entries(formData).map(([key, value]) => {
            return (
              <p key={key}>
                {key}: {value}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};
