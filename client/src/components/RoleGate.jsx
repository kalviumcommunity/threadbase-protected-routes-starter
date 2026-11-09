
// Import useAuth to access the currently logged-in user
import { useAuth } from "../auth/AuthContext.jsx";

// RoleGate controls which users can see role-specific UI elements
export default function RoleGate({ requiredRole, children }) {

  // Get the current user from AuthContext
  const { user } = useAuth();

  // Check whether the user's role matches the required role
  // If the role does not match, hide the protected content
  if (user?.role !== requiredRole) {
    return null;
  }

  // If the user's role matches, display the protected content
  return children;
}
