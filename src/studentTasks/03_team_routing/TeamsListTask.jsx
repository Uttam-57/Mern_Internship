import React from "react";
import { Link } from "react-router-dom";
import "../tasks.css";

export const TeamsListTask = () => {
  const teams = ["csk", "mi", "rcb", "gt", "rr", "kkr", "lsg", "srh", "pbks", "dc"];

  return (
    <div className="task-page">
      <h1>Teams Task</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {teams.map((team) => {
          return (
            <li key={team} style={{ margin: "8px 0" }}>
              <Link to={`/student-tasks/teamdetail/${team}`}>{team.toUpperCase()}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
