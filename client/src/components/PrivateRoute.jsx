// components/PrivateRoute.jsx

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  // Redirect unauthenticated users to the login page
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Allow authenticated users to access the protected page
  return children;
}