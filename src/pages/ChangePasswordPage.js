import React, { useState } from "react";

function ChangePasswordPage({ onBackToSettings }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const [clickMessage, setClickMessage] = useState("");
  const [saveStatus, setSaveStatus] = useState("");

  function handlePrototypeSubmit() {
    setSaveStatus("Password changed successfully.");
    setClickMessage(
      "This is placeholder as proper password verification isnt implemented yet"
    );
  }

  function handleBackClick() {
    setSaveStatus("");
    setClickMessage("");
    onBackToSettings();
  }

  return (
    <div className="loginPage">
      <div className="loginCard">
        <div className="loginHeader">
          <h1 className="loginTitle">Change Password</h1>
          <p className="loginSubtitle">
            Enter your current password and your new password below.
          </p>
        </div>

        {saveStatus && (
          <p
            style={{
              backgroundColor: "#e6f4ea",
              color: "#2e7d32",
              padding: "8px 14px",
              borderRadius: "6px",
              marginBottom: "16px",
              fontSize: "14px",
            }}
          >
            ✓ {saveStatus}
          </p>
        )}

        <div className="loginForm">
          <input
            className="textInput"
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />

          <input
            className="textInput"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <input
            className="textInput"
            type="password"
            placeholder="Repeat New Password"
            value={repeatNewPassword}
            onChange={(e) => setRepeatNewPassword(e.target.value)}
          />

          <button className="primaryButton" onClick={handlePrototypeSubmit}>
            Change Password
          </button>

          <button className="secondaryButton" onClick={handleBackClick}>
            Back to Settings
          </button>

          {clickMessage && (
            <p
              style={{
                marginTop: "6px",
                color: "var(--text-secondary)",
                fontSize: "14px",
                lineHeight: "1.5",
                whiteSpace: "pre-line",
              }}
            >
              {clickMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordPage;