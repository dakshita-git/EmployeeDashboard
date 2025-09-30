import React from "react";
import Headers from "../Others/Headers";
import TaskListNumbers from "../Others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ changeUser, data }) => (
  <div className="min-h-screen bg-gradient-to-tr from-emerald-100 to-emerald-200 p-8">
    <Headers changeUser={changeUser} data={data} />
    <div className="grid gap-8 mt-5">
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  </div>
);

export default EmployeeDashboard;
