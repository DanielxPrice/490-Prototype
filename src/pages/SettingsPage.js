import React, { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import mockSettings from "../data/mockSettings";

function SettingsPage({ currentPage, onNavigate }) {
  const [settings, setSettings] = useState(mockSettings);
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");
  const [saveStatus, setSaveStatus] = useState("");

  function startEdit(field) {
    setEditingField(field);
    setTempValue(settings[field]);
    setSaveStatus("");
  }

  function cancelEdit() {
    setEditingField(null);
    setTempValue("");
  }

  function saveEdit(field) {
    if (!tempValue.trim()) return;
    setSettings({ ...settings, [field]: tempValue.trim() });
    setEditingField(null);
    setSaveStatus(`"${field}" updated successfully.`);
  }

  const fields = [
    {
      key: "username",
      label: "Username",
      description: "Your public display name for the platform.",
    },
    {
      key: "email",
      label: "Email",
      description: "Primary email connected to the account.",
    },
    {
      key: "theme",
      label: "Theme",
      description: "Current display preference for the prototype.",
      options: ["Light", "Dark"],
    },
    {
      key: "notifications",
      label: "Notifications",
      description: "Whether you receive session reminder notifications.",
      options: ["Enabled", "Disabled"],
    },
  ];

  return (
    <PageLayout
      title="Settings"
      subtitle="Manage your account settings and preferences."
      currentPage={currentPage}
      onNavigate={onNavigate}
    >
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

      <div className="settingsPanel">
        {fields.map(({ key, label, description, options }) => (
          <div className="settingsRowCard" key={key}>
            <div className="settingsRowLeft">
              <h3>{label}</h3>
              <p>{description}</p>
            </div>

            {editingField === key ? (
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                {options ? (
                  <select
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    autoFocus
                    style={{
                      padding: "6px 10px",
                      borderRadius: "6px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                      minWidth: "140px",
                      backgroundColor: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    {options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                <input
                  type="text"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveEdit(key);
                    if (e.key === "Escape") cancelEdit();
                  }}
                  autoFocus
                  style={{
                    padding: "6px 10px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "14px",
                    minWidth: "140px",
                  }}
                />
                )}
                <button
                  className="primaryButton"
                  style={{ padding: "6px 12px", fontSize: "13px" }}
                  onClick={() => saveEdit(key)}
                >
                  Save
                </button>
                <button
                  className="secondaryButton"
                  style={{ padding: "6px 12px", fontSize: "13px" }}
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <div className="settingsValue">{settings[key]}</div>
                <button
                  className="secondaryButton"
                  style={{ padding: "4px 10px", fontSize: "13px", display: "flex", alignItems: "center", gap: "5px" }}
                  onClick={() => startEdit(key)}
                  title="Edit"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="largePanel" style={{ marginTop: "24px" }}>
        <h2 className="panelTitle">Password</h2>
        <p>
          Password changes require current password verification. This feature
          will be fully implemented in CPSC 491.
        </p>
        <button
          className="primaryButton"
          style={{ marginTop: "10px" }}
          onClick={() => onNavigate("changePassword")}
        >
          Change Password
        </button>
      </div>
    </PageLayout>
  );
}

export default SettingsPage;