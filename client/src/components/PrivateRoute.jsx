
// Import Navigate to redirect users and useLocation to remember
// which page the user originally wanted to visit.
import { Navigate, useLocation } from "react-router-dom";

// Import useAuth to access the currently logged-in user
import { useAuth } from "../auth/AuthContext.jsx";

// PrivateRoute protects pages that require authentication
export default function PrivateRoute({ children }) {

  // Get the current URL/location
  const location = useLocation();

  // Get the logged-in user from AuthContext
  const { user } = useAuth();

  // If no user is logged in, redirect to the login page
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace // Replace current history entry to avoid Back button issues
        state={{ from: location }} // Remember the originally requested page
      />
    );
  }

  // If the user is authenticated, render the protected page
  return children;
}
