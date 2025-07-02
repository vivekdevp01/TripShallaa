// src/components/PrivateRoute.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx"

const PrivateRoute = ({ allowedRoles, children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  if (!user) {
    // Redirect to login, but save the current location to return to after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    // User doesn't have required role
    return <Navigate to="/unauthorized" replace />;
  }

  // If using nested routes with Outlet
  return children ? children : <Outlet />;
};

export default PrivateRoute;