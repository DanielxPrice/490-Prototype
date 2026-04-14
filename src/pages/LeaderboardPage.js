import React from "react";
import PageLayout from "../components/layout/PageLayout";
import mockLeaderboard from "../data/mockLeaderboard";

function LeaderboardPage({ currentPage, onNavigate }) {
  return (
    <PageLayout
      title="Leaderboard"
      subtitle="Compare rankings with other users."
      currentPage={currentPage}
      onNavigate={onNavigate}
    >
      <div className="tablePanel">
        <div className="leaderboardHeader">
          <span>Rank</span>
          <span>User</span>
          <span>ELO</span>
        </div>

        {mockLeaderboard.map((user) => (
          <div className="leaderboardRow" key={user.id}>
            <span>{user.rank}</span>
            <span>{user.username}</span>
            <span>{user.elo}</span>
          </div>
        ))}
      </div>

      <div className="largePanel">
        <h2 className="panelTitle">Friends Ranking</h2>
        <p>
          Later you can add filters for global ranking and friends-only ranking.
        </p>
      </div>
    </PageLayout>
  );
}

export default LeaderboardPage;