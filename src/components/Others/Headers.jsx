import React from "react";

const Headers = ({ changeUser, data }) => {
  const username = data?.firstName || "Admin";
  const handleLogout = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="flex items-center justify-between mb-8 p-4 bg-white/90 rounded shadow">
      <h1 className="text-2xl font-semibold">
        Hello,
        <span className="ml-2 text-emerald-700 text-3xl">{username} 👋</span>
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 transition-colors text-white px-6 py-2 rounded shadow"
      >
        Log Out
      </button>
    </div>
  );
};

export default Headers;
