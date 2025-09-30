import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

// Create context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Ensure demo data exists in localStorage
    setLocalStorage();

    const storedData = getLocalStorage();

    if (storedData && storedData.employees) {
      setUserData(storedData.employees);
    } else {
      setUserData([]); // fallback to empty array
    }
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
