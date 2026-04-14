import React from "react";

function RegisterPage({ onRegister, onGoToLogin }) {
  return (
    <div className="loginPage">
      <div className="loginCard">
        <h1 className="loginTitle">Create Account</h1>
        <p className="loginSubtitle">
          Make a hardcoded prototype account for Interview Buddy.
        </p>

        <div className="loginForm">
          <input className="textInput" type="text" placeholder="Username" />
          <input className="textInput" type="email" placeholder="Email" />
          <input className="textInput" type="password" placeholder="Password" />
          <input
            className="textInput"
            type="password"
            placeholder="Confirm Password"
          />

          <button className="primaryButton" onClick={onRegister}>
            Create Account
          </button>

          <button className="textButton" onClick={onGoToLogin}>
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;