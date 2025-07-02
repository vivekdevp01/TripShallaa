// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { token, role }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ This should only run once on mount
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token && role) {
      setUser({ token, role }); // ✅ only sets once
    }

    setLoading(false); // ✅ only once
  }, []); // ✅ empty dependency array prevents infinite loop

  const login = (token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    setUser({ token, role });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setUser(null);
  };

  const signup = async (name, email, password) => {
    // implement actual signup logic or dummy
    login("dummyToken", "user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
