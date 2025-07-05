// routes/AdminRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import {
  AdminDashboard,
  PostCamping,
  PostPlaces,
  PostRafting
} from "../pages/index.pages.js";
import { PrivateRoute } from "../components/index.components.js";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute allowedRoles={["admin"]}>
            <App />
          </PrivateRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="rafting" element={<PostRafting />} />
        <Route path="camping" element={<PostCamping />} />
        <Route path="places" element={<PostPlaces />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
