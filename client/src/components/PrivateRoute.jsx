
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";

export default function PrivateRoute({ children }) {
  const location = useLocation();

  // Get the current logged-in user
  const { user } = useAuth();

  // If the user is not logged in, redirect to login
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  // If the user is logged in, show the protected page
  return children;
}
