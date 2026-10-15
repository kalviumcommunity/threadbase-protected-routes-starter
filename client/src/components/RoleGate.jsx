// components/RoleGate.jsx
// ────────────────────────────────────────────────────────────
// TASK 3: render children ONLY when the logged-in user's role matches.
//   - read the user:  const { user } = useAuth();
//   - if user?.role !== requiredRole, return null (hide the control — do NOT redirect)
//   - otherwise return children
//
// It is already used in DashboardPage.jsx to wrap an admin-only section.
// Right now it shows that section to everyone — fix that here.
// ────────────────────────────────────────────────────────────
import { useAuth } from "../auth/AuthContext.jsx";

export default function RoleGate({ requiredRole, children }) {
  const { user } = useAuth();

  if (user?.role !== requiredRole) {
    return null;
  }

  return children;
}
