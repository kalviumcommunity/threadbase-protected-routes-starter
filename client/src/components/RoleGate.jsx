
import { useAuth } from "../auth/AuthContext.jsx";

export default function RoleGate({ requiredRole, children }) {
  const { user } = useAuth();

  // Hide the content if the user's role does not match
  if (user?.role !== requiredRole) {
    return null;
  }

  // Show the content only to users with the required role
  return children;
}
