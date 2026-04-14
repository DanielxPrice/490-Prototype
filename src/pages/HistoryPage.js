import React from "react";
import PageLayout from "../components/layout/PageLayout";
import mockSessions from "../data/mockSessions";

function HistoryPage({ currentPage, onNavigate }) {
  return (
    <PageLayout
      title="History"
      subtitle="Review previous interview sessions."
      currentPage={currentPage}
      onNavigate={onNavigate}
    >
      <div className="historyList">
        {mockSessions.map((session) => (
          <div className="historyCard" key={session.id}>
            <div className="historyCardTop">
              <h2>{session.mode}</h2>
              <span className="historyScore">{session.score}</span>
            </div>

            <p className="historyMeta">Date: {session.date}</p>
            <p className="historyMeta">Questions Answered: {session.questionsAnswered}</p>
            <p className="historyMeta">ELO Change: {session.eloChange}</p>

            <div className="actionRow">
              <button className="secondaryButton">View</button>
              <button className="secondaryButton">Resume</button>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export default HistoryPage;