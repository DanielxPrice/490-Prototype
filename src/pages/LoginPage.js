import React from "react";

function LoginPage({ onLogin, onGoToRegister }) {
  return (
    <div className="loginPage">
      <div className="loginCard">
        <div className="loginHeader">
          <h1 className="loginTitle">Interview Buddy</h1>
          <p className="loginSubtitle">
            Practice interview questions in one place.
          </p>
        </div>

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