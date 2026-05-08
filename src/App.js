import React, { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import InterviewSetupPage from "./pages/InterviewSetupPage";
import InterviewSessionPage from "./pages/InterviewSessionPage";
import SessionResultsPage from "./pages/SessionResultsPage";
import SettingsPage from "./pages/SettingsPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
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
  const [sessionResult, setSessionResult] = useState({
    mode: "Quiz Style",
    date: "May 4, 2026",
    score: "0%",
    questionsAnswered: 0,
    eloChange: "0",
    isCorrect: null,
    answerSubmitted: false,
  });
  // UC15 — banner shown on the login page after account deletion.
  const [loginMessage, setLoginMessage] = useState("");

  function handleNavigate(pageName) {
    // Any navigation away from login clears the one-shot banner so it
    // doesn't reappear if the user logs in and then logs out.
    if (pageName !== "login") {
      setLoginMessage("");
    }
    setCurrentPage(pageName);
  }

  function handleAccountDeleted() {
    // UC15 happy path — clear sensitive state, set the success banner,
    // and route back to the public login page.
    setSessionResult({
      mode: "Quiz Style",
      date: "May 4, 2026",
      score: "0%",
      questionsAnswered: 0,
      eloChange: "0",
      isCorrect: null,
      answerSubmitted: false,
    });
    setSelectedMode("");
    setLoginMessage("Your account has been successfully deleted.");
    setCurrentPage("login");
  }

  function handleSelectMode(modeName) {
    setSelectedMode(modeName);
    setCurrentPage("interviewSetup");
  }

  function handleStartInterview(formData) {
    setSetupData(formData);
    setCurrentPage("interview");
  }

  function handleEndInterview(resultData) {
    setSessionResult(resultData);
    setCurrentPage("sessionResults");
  }

  if (currentPage === "login") {
    return (
      <LoginPage
        onLogin={() => handleNavigate("dashboard")}
        onGoToRegister={() => handleNavigate("register")}
        loginMessage={loginMessage}
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
        onEndInterview={handleEndInterview}
      />
    );
  }

  if (currentPage === "sessionResults") {
    return (
      <SessionResultsPage
        currentPage={currentPage}
        onNavigate={handleNavigate}
        sessionResult={sessionResult}
      />
    );
  }

  if (currentPage === "settings") {
    return (
      <SettingsPage
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onAccountDeleted={handleAccountDeleted}
      />
    );
  }

  if (currentPage === "changePassword") {
    return (
      <ChangePasswordPage
        onBackToSettings={() => handleNavigate("settings")}
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
