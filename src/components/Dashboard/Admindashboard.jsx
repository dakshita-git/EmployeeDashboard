import React from "react";
import Headers from "../Others/Headers";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = ({ changeUser }) => (
  <div className="min-h-screen bg-gradient-to-tr from-emerald-50 via-emerald-200 to-emerald-100 p-8">
    <Headers changeUser={changeUser} />
    <div className="grid gap-8 mt-5">
      <CreateTask />
      <AllTask />
    </div>
  </div>
);

export default AdminDashboard;
