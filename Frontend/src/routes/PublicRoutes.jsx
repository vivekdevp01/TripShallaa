import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login, Signup } from "../pages/index.pages.js"

const PublicRoutes = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token) {
    return <Navigate to={role === "admin" ? "/admin" : "/"} />;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default PublicRoutes;
