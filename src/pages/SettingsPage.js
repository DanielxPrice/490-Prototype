import React from "react";
import PageLayout from "../components/layout/PageLayout";

function SettingsPage({ currentPage, onNavigate }) {
  return (
    <PageLayout
      title="Settings"
      subtitle="Manage your prototype account settings."
      currentPage={currentPage}
      onNavigate={onNavigate}
    >
      <div className="settingsPanel">
        <div className="settingsRowCard">
          <div className="settingsRowLeft">
            <h3>Username</h3>
            <p>Your public display name for the platform.</p>
          </div>
          <div className="settingsValue">Daniel P</div>
        </div>

        <div className="settingsRowCard">
          <div className="settingsRowLeft">
            <h3>Password</h3>
            <p>Your login password for Interview Buddy.</p>
          </div>
          <div className="settingsValue">*Password*</div>
        </div>

        <div className="settingsRowCard">
          <div className="settingsRowLeft">
            <h3>Theme</h3>
            <p>Current display preference for the prototype.</p>
          </div>
          <div className="settingsValue">Light</div>
        </div>

        <div className="settingsRowCard">
          <div className="settingsRowLeft">
            <h3>Email</h3>
            <p>Primary email connected to the account.</p>
          </div>
          <div className="settingsValue">daniel@example.com</div>
        </div>
      </div>

      <div className="largePanel">
        <h2 className="panelTitle">Preferences</h2>
        <p>
          Later you can add username editing, password changes, theme options,
          and other display preferences here.
        </p>
      </div>
    </PageLayout>
  );
}

export default SettingsPage;