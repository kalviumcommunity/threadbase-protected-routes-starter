// components/RoleGate.jsx

import { useAuth } from "../auth/AuthContext.jsx";

export default function RoleGate({ requiredRole, children }) {
  const { user } = useAuth();

  // Hide the section if the user's role does not match
  if (user?.role !== requiredRole) {
    return null;
  }

  // Render the section only if the role matches
  return children;
}