// components/PrivateRoute.jsx
// ────────────────────────────────────────────────────────────
// TASK 1: turn this passthrough into a real authentication gate.
//   - read the current user:  const { user } = useAuth();
//   - if there is NO user, redirect to /login instead of rendering the page:
//       return <Navigate to="/login" replace state={{ from: location }} />;
//     (the `replace` prop keeps the browser Back button sane;
//      the `state` lets the login page send them back where they intended)
//   - otherwise, render the protected page:  return children;
//
// Then TASK 2: wrap /dashboard, /profile and /threads/new with <PrivateRoute>
// in App.jsx. The full walkthrough is in the lesson.
// ────────────────────────────────────────────────────────────
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
