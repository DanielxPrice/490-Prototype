import React from "react";

function Sidebar({ currentPage, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebarTop">
        <div className="profileCircle">DP</div>
      </div>

      <nav className="sidebarNav">
        <button
          className={currentPage === "dashboard" ? "sidebarButton active" : "sidebarButton"}
          onClick={() => onNavigate("dashboard")}
        >
          Home
        </button>

        <button
          className={currentPage === "interview" ? "sidebarButton active" : "sidebarButton"}
          onClick={() => onNavigate("interview")}
        >
          Practice
        </button>

        <button
          className={currentPage === "history" ? "sidebarButton active" : "sidebarButton"}
          onClick={() => onNavigate("history")}
        >
          History
        </button>

        <button
          className={currentPage === "leaderboard" ? "sidebarButton active" : "sidebarButton"}
          onClick={() => onNavigate("leaderboard")}
        >
          Ranking
        </button>

        <button
          className={currentPage === "analytics" ? "sidebarButton active" : "sidebarButton"}
          onClick={() => onNavigate("analytics")}
        >
          Stats
        </button>

        <button
          className={currentPage === "settings" ? "sidebarButton active" : "sidebarButton"}
          onClick={() => onNavigate("settings")}
        >
          Settings
        </button>
      </nav>

      <div className="sidebarBottom">
        <button className="sidebarLogoutButton" onClick={() => onNavigate("login")}>
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;