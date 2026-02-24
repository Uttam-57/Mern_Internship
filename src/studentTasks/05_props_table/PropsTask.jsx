import React from "react";
import { ReusableTable } from "./ReusableTable";
import { SummaryCard } from "./SummaryCard";
import "../tasks.css";

export const PropsTask = () => {
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "NAME" },
    { key: "age", label: "AGE" },
    { key: "email", label: "EMAIL" },
  ];

  const rows = [
    { id: 1, name: "Amit", age: 23, email: "amit@gmail.com" },
    { id: 2, name: "Neha", age: 21, email: "neha@gmail.com" },
    { id: 3, name: "Rahul", age: 24, email: "rahul@gmail.com" },
  ];

  return (
    <div className="task-page">
      <h1>Props Task (3 Components)</h1>
      <div className="task-grid">
        <SummaryCard title="Total Students" total={rows.length} />
        <SummaryCard title="Reusable Table" total="Working" />
      </div>
      <div className="task-box">
        <ReusableTable columns={columns} rows={rows} />
      </div>
    </div>
  );
};
