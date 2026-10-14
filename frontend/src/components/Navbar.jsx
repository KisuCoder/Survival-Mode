import { useState } from "react";
import { Home, UserRound, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import AuthModal from "./AuthModal";
import "../css/Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authUser, setAuthUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("dihausUser") || "null");
    } catch {
      return null;
    }
  });

  const isAdmin = authUser?.role === "admin";

  function handleAuthSuccess(result) {
    localStorage.setItem("dihausToken", result.token);
    localStorage.setItem("dihausUser", JSON.stringify(result.user));

    setAuthUser(result.user);
    setIsAuthOpen(false);

    // Admins land on their dashboard after logging in
    if (result.user.role === "admin") navigate("/admin");
  }

  function handleLogout() {
    localStorage.removeItem("dihausToken");
    localStorage.removeItem("dihausUser");
    setAuthUser(null);

    // Leave the admin page when logging out
    if (location.pathname === "/admin") navigate("/");
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <span className="logo-icon">
              <Home size={15} />
            </span>
            <span>DiHaus DIHtionary AI</span>
          </Link>

          <div className="navbar-links">
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>

            <Link
              to="/properties"
              className={
                location.pathname === "/properties" ? "active" : ""
              }
            >
              Properties
            </Link>

            <Link
              to="/predictor"
              className={
                location.pathname === "/predictor" ? "active" : ""
              }
            >
              AI Predictor
            </Link>

            {isAdmin && (
              <Link
                to="/admin"
                className={location.pathname === "/admin" ? "active" : ""}
              >
                Admin
              </Link>
            )}
          </div>

          <div className="navbar-auth">
            {authUser ? (
              <>
                <span className="navbar-user">
                  <UserRound size={16} />
                  <span>{authUser.name}</span>
                </span>

                <button
                  type="button"
                  className="login-button"
                  onClick={handleLogout}
                >
                  <LogOut size={15} />
                  Logout
                </button>
              </>
            ) : (
              <button
                type="button"
                className="login-button"
                onClick={() => setIsAuthOpen(true)}
              >
                <UserRound size={15} />
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {isAuthOpen && (
        <AuthModal
          onClose={() => setIsAuthOpen(false)}
          onAuthSuccess={handleAuthSuccess}
        />
      )}
    </>
  );
}

export default Navbar;
