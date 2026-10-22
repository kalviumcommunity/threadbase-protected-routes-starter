import { useAuth } from "../auth/AuthContext.jsx";

export default function RoleGate({ requiredRole, children }) {
  const { user } = useAuth();

  if (user?.role !== requiredRole) {
    return null;
  }

  return children;
}
