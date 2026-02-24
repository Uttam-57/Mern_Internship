import React from "react";
import { Link } from "react-router-dom";
import "./tasks.css";

export const StudentTasksHome = () => {
  return (
    <div className="task-page">
      <h1>All Pending Tasks</h1>
      <p>Mentor task list completed in separate folders.</p>
      <div className="task-links">
        <Link to="/student-tasks/header-portfolio">1. Header + Portfolio</Link>
        <Link to="/student-tasks/map-table">2. MapDemo 6-10 Table</Link>
        <Link to="/student-tasks/teams">3. Teams Routing</Link>
        <Link to="/student-tasks/notes">4. VDOM + useState Notes</Link>
        <Link to="/student-tasks/props">5. Props + Reusable Table</Link>
        <Link to="/student-tasks/inputs">6. 10 Inputs + Submit</Link>
        <Link to="/student-tasks/dependent-dropdown">7. Dependent Dropdown</Link>
        <Link to="/student-tasks/forms">8. Forms Practice</Link>
        <Link to="/student-tasks/movies">9. Movie Grid + Detail</Link>
        <Link to="/student-tasks/apidemo3">10. ApiDemo3</Link>
      </div>
    </div>
  );
};
