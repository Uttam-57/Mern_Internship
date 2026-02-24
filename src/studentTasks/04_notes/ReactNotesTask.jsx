import React from "react";
import "../tasks.css";

export const ReactNotesTask = () => {
  return (
    <div className="task-page">
      <div className="task-box">
        <h2>Research: VDOM</h2>
        <p>
          Virtual DOM means React keeps a virtual copy of UI in memory, compares old vs new
          changes, then updates only changed real DOM nodes.
        </p>
        <p>
          Benefit: better performance and simple UI updates. Limitation: still has comparison
          cost, and heavy re-renders can slow app if state is not managed properly.
        </p>
      </div>

      <div className="task-box">
        <h2>Pros and Cons of useState</h2>
        <p>Pros: very easy, useful for local component data, triggers re-render automatically.</p>
        <p>
          Cons: too many useState variables can make component messy, async update confusion can
          happen, and prop drilling problem stays when sharing deeply.
        </p>
      </div>
    </div>
  );
};
