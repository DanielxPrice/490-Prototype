import React from "react";

function LoginPage({ onLogin, onGoToRegister, loginMessage }) {
  return (
    <div className="loginPage">
      <div className="loginCard">
        <div className="loginHeader">
          <h1 className="loginTitle">Interview Buddy</h1>
          <p className="loginSubtitle">
            Practice interview questions in one place.
          </p>
        </div>

        {/* UC15 — confirmation banner shown after account deletion. */}
        {loginMessage && (
          <p
            style={{
              backgroundColor: "#e6f4ea",
              color: "#2e7d32",
              padding: "10px 14px",
              borderRadius: "8px",
              marginBottom: "16px",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            ✓ {loginMessage}
          </p>
        )}

        <div className="loginForm">
          <input
            className="textInput"
            type="text"
            placeholder="Username or Email"
          />

          <input
            className="textInput"
            type="password"
            placeholder="Password"
          />

          <button className="primaryButton" onClick={onLogin}>
            Login
          </button>

          <button className="textButton" onClick={onGoToRegister}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
