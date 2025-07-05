// routes/UserRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import {
  UserDashboard,
  VehicleRent,
  Rafting,
  Camping,
  AdventureActivities,
} from "../pages/index.pages.js";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<UserDashboard />} />
        <Route path="vehicle-rent" element={<VehicleRent />} />
        <Route path="rafting" element={<Rafting />} />
        <Route path="camping" element={<Camping />} />
        <Route path="adventure-activities" element={<AdventureActivities />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
