import React from "react";
import "../tasks.css";

export const HeaderPortfolioTask = () => {
  return (
    <div className="task-page">
      <div className="task-box" style={{ backgroundColor: "#f2f6ff" }}>
        <h1 style={{ margin: 0 }}>HEADER COMPONENT</h1>
      </div>

      <div className="task-box">
        <h2>Portfolio: Virat Kohli</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg"
          alt="virat kohli"
          style={{ width: "220px", height: "240px", objectFit: "cover" }}
        />
        <p>Favorite player because of consistency and fitness.</p>
      </div>
    </div>
  );
};
