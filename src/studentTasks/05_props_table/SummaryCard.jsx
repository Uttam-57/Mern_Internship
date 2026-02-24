import React from "react";
import "../tasks.css";

export const SummaryCard = ({ title, total }) => {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <h2>{total}</h2>
    </div>
  );
};
