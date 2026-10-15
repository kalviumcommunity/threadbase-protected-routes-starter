// components/RoleGate.jsx
// ────────────────────────────────────────────────────────────
// Render role-specific content without redirecting users who lack the role.
// DashboardPage.jsx uses this to guard the admin-only section.
// ────────────────────────────────────────────────────────────
import { useAuth } from "../auth/AuthContext.jsx";

export default function RoleGate({ requiredRole, children }) {
  const { user } = useAuth();
  return user?.role === requiredRole ? children : null;
}
