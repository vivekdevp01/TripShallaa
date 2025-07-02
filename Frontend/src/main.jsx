// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext.jsx";
import App from './App.jsx';
import './index.css';

import { Login, Signup, UserDashboard, AdminDashboard } from "./pages/index.pages.js";
import { PrivateRoute } from "./components/index.components.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<App />}>
            <Route index element={<UserDashboard />} />
          </Route>

          <Route path="/admin" element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route element={<App />}>
              <Route index element={<AdminDashboard />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
