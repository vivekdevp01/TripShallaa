import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import { AdminDashboard } from "../pages/index.pages.js";
import { PrivateRoute } from "../components/index.components.js";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <PrivateRoute allowedRoles={["admin"]}>
            <App />
          </PrivateRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
