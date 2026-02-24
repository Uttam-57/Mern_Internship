import React from "react";
import "../tasks.css";

export const MapDemo678910Task = () => {
  const players = [
    {
      id: 1,
      name: "MS Dhoni",
      age: 43,
      team: "CSK",
      role: "captain",
      strikeRate: 138,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/37/Mahendra_Singh_Dhoni.jpg",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      age: 38,
      team: "MI",
      role: "batter",
      strikeRate: 133,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Rohit_Sharma_2024.jpg",
    },
    {
      id: 3,
      name: "Virat Kohli",
      age: 37,
      team: "RCB",
      role: "batter",
      strikeRate: 145,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg",
    },
    {
      id: 4,
      name: "Hardik Pandya",
      age: 33,
      team: "MI",
      role: "all-rounder",
      strikeRate: 151,
      image: "",
    },
    {
      id: 5,
      name: "Ravindra Jadeja",
      age: 37,
      team: "CSK",
      role: "all-rounder",
      strikeRate: 130,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/Ravindra_Jadeja.jpg",
    },
    {
      id: 6,
      name: "Shubman Gill",
      age: 27,
      team: "GT",
      role: "captain",
      strikeRate: 148,
      image: "",
    },
  ];

  return (
    <div className="task-page">
      <h1>Map Demo 6,7,8,9,10 - Table Task</h1>
      <table className="task-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>TEAM</th>
            <th>ROLE</th>
            <th>STRIKE RATE</th>
            <th>IMAGE</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => {
            return (
              <tr
                key={player.id}
                style={{
                  backgroundColor: player.team === "CSK" ? "#fff9db" : "white",
                }}
              >
                <td>{player.id}</td>
                <td style={{ fontWeight: player.role === "captain" ? "bold" : "normal" }}>
                  {player.name}
                </td>
                <td style={{ color: player.age > 35 ? "red" : "black" }}>{player.age}</td>
                <td>{player.team}</td>
                <td>{player.role}</td>
                <td
                  style={{
                    backgroundColor: player.strikeRate >= 145 ? "#c9f7d1" : "transparent",
                  }}
                >
                  {player.strikeRate}
                </td>
                <td>
                  {player.image ? (
                    <img
                      src={player.image}
                      alt={player.name}
                      style={{ width: "70px", height: "70px", objectFit: "cover" }}
                    />
                  ) : (
                    <span style={{ color: "crimson" }}>image is missing....</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
