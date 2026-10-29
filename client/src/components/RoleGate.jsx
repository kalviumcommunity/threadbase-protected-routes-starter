
// components/RoleGate.jsx

import { useAuth } from "../auth/AuthContext.jsx";

export default function RoleGate({ requiredRole, children }) {
  const { user } = useAuth();

  // Hide the content if the user's role doesn't match.
  if (user?.role !== requiredRole) {
    return null;
  }

  // Render the content only if the user's role matches.
  return children;
}
