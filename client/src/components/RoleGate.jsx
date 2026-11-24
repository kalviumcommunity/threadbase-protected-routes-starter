
import { useAuth } from "../auth/AuthContext.jsx";

export default function RoleGate({ requiredRole, children }) {
  // Get the logged-in user
  const { user } = useAuth();

  // Hide the content if the user's role doesn't match
  if (user?.role !== requiredRole) {
    return null;
  }

  // Show the content if the role matches
  return children;
}
