import React from "react";
import "../tasks.css";

export const ReusableTable = ({ columns, rows }) => {
  return (
    <table className="task-table">
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={column.key}>{column.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {columns.map((column) => {
                return <td key={column.key}>{row[column.key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
