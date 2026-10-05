import { Home, UserRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import "../css/Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
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

        </div>

        <button
          className="login-button"
          onClick={() => alert("Login functionality can be connected later.")}
        >
          <UserRound size={15} />
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;