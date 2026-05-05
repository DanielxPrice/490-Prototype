import React from "react";
import PageLayout from "../components/layout/PageLayout";

function SessionResultsPage({ currentPage, onNavigate, sessionResult }) {
  const statusText =
    sessionResult.isCorrect === true
      ? "Your latest quiz answer was correct."
      : sessionResult.isCorrect === false
        ? "Your latest quiz answer was incorrect."
        : "Interview session ended.";

  return (
    <PageLayout
      title="Interview Summary"
      subtitle={statusText}
      currentPage={currentPage}
      onNavigate={onNavigate}
    >
      <div className="resultSummaryCard">
        <div className="resultSummaryTop">
          <h2>{sessionResult.mode || "Quiz Style"}</h2>
          <span className="resultSummaryScore">{sessionResult.score || "0%"}</span>
        </div>

        <p className="resultMeta">Date: {sessionResult.date || "May 4, 2026"}</p>
        <p className="resultMeta">
          Questions Answered: {sessionResult.questionsAnswered ?? 0}
        </p>
        <p className="resultMeta">ELO Change: {sessionResult.eloChange || "0"}</p>

        <div className="actionRow resultActionRow">
          <button
            className="secondaryButton"
            onClick={() => onNavigate("history")}
          >
            View
          </button>
          <button
            className="secondaryButton"
            onClick={() => onNavigate("interview")}
          >
            Resume
          </button>
        </div>
      </div>
    </PageLayout>
  );
}

export default SessionResultsPage;
