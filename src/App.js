import React, { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import InterviewSetupPage from "./pages/InterviewSetupPage";
import InterviewSessionPage from "./pages/InterviewSessionPage";
import SettingsPage from "./pages/SettingsPage";
import HistoryPage from "./pages/HistoryPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [selectedMode, setSelectedMode] = useState("");
  const [setupData, setSetupData] = useState({
    jobRole: "",
    experienceLevel: "",
    practiceGoals: "",
  });

  function handleNavigate(pageName) {
    setCurrentPage(pageName);
  }

  function handleSelectMode(modeName) {
    setSelectedMode(modeName);
    setCurrentPage("interviewSetup");
  }

  function handleStartInterview(formData) {
    setSetupData(formData);
    setCurrentPage("interview");
  }

  if (currentPage === "login") {
    return (
      <LoginPage
        onLogin={() => handleNavigate("dashboard")}
        onGoToRegister={() => handleNavigate("register")}
      />
    );
  }

  if (currentPage === "register") {
    return (
      <RegisterPage
        onRegister={() => handleNavigate("dashboard")}
        onGoToLogin={() => handleNavigate("login")}
      />
    );
  }

  if (currentPage === "dashboard") {
    return (
      <DashboardPage
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onSelectMode={handleSelectMode}
      />
    );
  }

  if (currentPage === "interviewSetup") {
    return (
      <InterviewSetupPage
        currentPage={currentPage}
        onNavigate={handleNavigate}
        selectedMode={selectedMode}
        onStartInterview={handleStartInterview}
      />
    );
  }

  if (currentPage === "interview") {
    return (
      <InterviewSessionPage
        currentPage={currentPage}
        onNavigate={handleNavigate}
        selectedMode={selectedMode}
        setupData={setupData}
      />
    );
  }

  if (currentPage === "settings") {
    return (
      <SettingsPage
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
    );
  }

  if (currentPage === "history") {
    return (
      <HistoryPage
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
    );
  }

  if (currentPage === "leaderboard") {
    return (
      <LeaderboardPage
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
    );
  }

  if (currentPage === "analytics") {
    return (
      <AnalyticsPage
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
    );
  }

  return (
    <DashboardPage
      currentPage="dashboard"
      onNavigate={handleNavigate}
      onSelectMode={handleSelectMode}
    />
  );
}

export default App;