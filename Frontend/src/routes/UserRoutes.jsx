import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import {
  UserDashboard,
  VehicleRent,
  Rafting,
  Camping,
  AdventureActivities,
  DetailView
} from "../pages/index.pages.js";
import { campData } from '../utils/data.js';
import TermsAndConditions from '../components/User/TermsAndConditions.jsx';
import BookingPolicy from '../components/User/BookinPolicy.jsx';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<UserDashboard />} />
        <Route path="vehicle-rent" element={<VehicleRent />} />
        <Route path="rafting" element={<Rafting />} />
        <Route path="camping" element={<Camping />} />
        <Route path="detail" element={<DetailView data={campData} />} />
        <Route path="adventure-activities" element={<AdventureActivities />} />
          <Route path="terms" element={<TermsAndConditions />} />
        <Route path="booking" element={<BookingPolicy />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
