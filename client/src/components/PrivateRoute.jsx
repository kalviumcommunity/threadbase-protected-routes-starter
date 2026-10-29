
// components/PrivateRoute.jsx

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  // If the user is not authenticated, redirect to the login page.
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // If the user is authenticated, render the protected page.
  return children;
}
