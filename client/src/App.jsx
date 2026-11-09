
// Import Routes and Route to configure application navigation
import { Routes, Route } from "react-router-dom";

// Import the navigation bar component
import NavBar from "./components/NavBar.jsx";

// Import PrivateRoute to protect pages from unauthenticated users
import PrivateRoute from "./components/PrivateRoute.jsx";

// Import public pages
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ThreadsPage from "./pages/ThreadsPage.jsx";

// Import protected pages
import DashboardPage from "./pages/DashboardPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import NewThreadPage from "./pages/NewThreadPage.jsx";

// Main application component
export default function App() {
  return (
    <div className="wrap">

      {/* Application heading */}
      <h1>Threadbase</h1>

      {/* Navigation bar */}
      <NavBar />

      {/* Configure application routes */}
      <Routes>

        {/* Public routes - accessible to everyone */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/threads" element={<ThreadsPage />} />

        {/* Protected route - only logged-in users can access Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />

        {/* Protected route - only logged-in users can access Profile */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        {/* Protected route - only logged-in users can create new threads */}
        <Route
          path="/threads/new"
          element={
            <PrivateRoute>
              <NewThreadPage />
            </PrivateRoute>
          }
        />

      </Routes>
    </div>
  );
}
