import { BrowserRouter, Routes, Route } from "react-router-dom";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import PostCamping from "./pages/admin/PostCamping";
import PostRafting from "./pages/admin/PostRafting";
import PostPlaces from "./pages/admin/PostPlaces";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/camping" element={<PostCamping />} />
        <Route path="/admin/rafting" element={<PostRafting />} />
        <Route path="/admin/places" element={<PostPlaces />} />

        {/* Optional: fallback for unmatched routes */}
        {/* <Route path="*" element={<div className="text-center mt-10 text-red-500">404 Page Not Found</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
