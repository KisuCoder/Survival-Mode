
import { useState } from "react";
import { X, Home, Eye, EyeOff, LoaderCircle } from "lucide-react";
import { loginUser, registerUser } from "../services/auth";
import "../css/AuthModal.css";

function AuthModal({ onClose, onAuthSuccess }) {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result =
        mode === "register"
          ? await registerUser({ name, email, password })
          : await loginUser({ email, password });

      onAuthSuccess(result);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function switchMode(nextMode) {
    setMode(nextMode);
    setError("");
    setPassword("");
  }

  return (
    <div
      className="auth-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="auth-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
      >
        <button
          type="button"
          className="auth-close"
          onClick={onClose}
          aria-label="Close authentication popup"
        >
          <X size={20} />
        </button>

        <div className="auth-brand-icon">
          <Home size={23} />
        </div>

        <h2 id="auth-title">
          {mode === "login" ? "Welcome back" : "Create your account"}
        </h2>

        <p className="auth-subtitle">
          {mode === "login"
            ? "Log in to continue to DiHaus DIHtionary AI."
            : "Join DiHaus to access your account."}
        </p>

        <div className="auth-tabs">
          <button
            type="button"
            className={mode === "login" ? "selected" : ""}
            onClick={() => switchMode("login")}
          >
            Login
          </button>

          <button
            type="button"
            className={mode === "register" ? "selected" : ""}
            onClick={() => switchMode("register")}
          >
            Register
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {mode === "register" && (
            <div className="auth-field">
              <label htmlFor="auth-name">Full name</label>
              <input
                id="auth-name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                minLength={2}
                maxLength={80}
                required
              />
            </div>
          )}

          <div className="auth-field">
            <label htmlFor="auth-email">Email address</label>
            <input
              id="auth-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="auth-password">Password</label>

            <div className="auth-password-wrap">
              <input
                id="auth-password"
                type={showPassword ? "text" : "password"}
                placeholder={
                  mode === "register"
                    ? "At least 8 characters"
                    : "Enter your password"
                }
                autoComplete={
                  mode === "login" ? "current-password" : "new-password"
                }
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength={mode === "register" ? 8 : undefined}
                required
              />

              <button
                type="button"
                className="auth-show-password"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="auth-submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <LoaderCircle size={18} className="auth-spinner" />
                Please wait...
              </>
            ) : mode === "login" ? (
              "Log In"
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <p className="auth-switch-text">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() =>
              switchMode(mode === "login" ? "register" : "login")
            }
          >
            {mode === "login" ? "Register" : "Log in"}
          </button>
        </p>

        <p className="auth-footer">
          Your account details are securely handled by DiHaus.
        </p>
      </section>
    </div>
  );
}

export default AuthModal;