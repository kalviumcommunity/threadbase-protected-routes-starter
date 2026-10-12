
import { useAuth } from "../context/AuthContext";

export function RoleGate({ requiredRole, children }) {
  const { user } = useAuth();

  if (user?.role !== requiredRole) {
    return null;
  }

  return children;
}
