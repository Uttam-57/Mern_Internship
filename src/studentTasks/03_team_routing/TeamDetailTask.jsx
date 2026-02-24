import React from "react";
import { useParams } from "react-router-dom";
import "../tasks.css";

export const TeamDetailTask = () => {
  const { teamName } = useParams();

  return (
    <div className="task-page">
      <h1>Team Detail</h1>
      <h2>/teamdetail/{teamName}</h2>
      <p>playing {teamName}....</p>
    </div>
  );
};
