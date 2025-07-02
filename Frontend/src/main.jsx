import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserDashboard, VehicleRent, Rafting, Camping, AdventureActivities } from "./pages/index.pages.js"
import './index.css'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<UserDashboard />} />
          <Route path="rafting" element={<Rafting />} />
          <Route path="camping" element={<Camping />} />
          <Route path="adventure-activities" element={<AdventureActivities />} />
          <Route path="vehicle-rent" element={<VehicleRent />} />
        </Route>
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);