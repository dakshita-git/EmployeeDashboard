import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/Admindashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const {userData} = useContext(AuthContext); // check your context return type!

  useEffect(() => {
    // Put demo data if missing
    if (!localStorage.getItem("employees")) setLocalStorage();

    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      try {
        const parsed = JSON.parse(loggedInUser);
        setUser(parsed.role);
        setLoggedInUserData(parsed.data || null);
      } catch {
        localStorage.removeItem("loggedInUser");
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      const adminData = { role: "admin", data: null };
      setUser("admin");
      setLoggedInUserData(null);
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        const employeeData = { role: "employee", data: employee };
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
      } else {
        alert("Invalid Credentials!");
      }
    } else {
      alert("No employee data found");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard changeUser={handleLogout} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
