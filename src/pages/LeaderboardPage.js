import React, { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import mockLeaderboard from "../data/mockLeaderboard";
import mockFriends from "../data/mockFriends";

function LeaderboardPage({ currentPage, onNavigate }) {
  const [friends, setFriends] = useState(mockFriends);
  const [searchInput, setSearchInput] = useState("");
  const [addStatus, setAddStatus] = useState("");
  const [activeTab, setActiveTab] = useState("global");

  function handleAddFriend() {
    const trimmed = searchInput.trim();
    if (!trimmed) return;

    const alreadyFriend = friends.some(
      (f) => f.username.toLowerCase() === trimmed.toLowerCase()
    );
    if (alreadyFriend) {
      setAddStatus(`"${trimmed}" is already in your friends list.`);
      return;
    }

    const found = mockLeaderboard.find(
      (u) => u.username.toLowerCase() === trimmed.toLowerCase()
    );

    if (found) {
      setFriends([...friends, found]);
      setAddStatus(`Friend "${found.username}" added successfully!`);
    } else {
      setAddStatus(`No user found with username "${trimmed}".`);
    }
    setSearchInput("");
  }

  function handleRemoveFriend(id) {
    setFriends(friends.filter((f) => f.id !== id));
    setAddStatus("");
  }

  return (
    <PageLayout
      title="Leaderboard"
      subtitle="Compare rankings with other users."
      currentPage={currentPage}
      onNavigate={onNavigate}
    >
      <div className="actionRow" style={{ marginBottom: "16px" }}>
        <button
          className={activeTab === "global" ? "primaryButton" : "secondaryButton"}
          onClick={() => setActiveTab("global")}
        >
          Global Rankings
        </button>
        <button
          className={activeTab === "friends" ? "primaryButton" : "secondaryButton"}
          onClick={() => setActiveTab("friends")}
        >
          Friends
        </button>
      </div>

      {activeTab === "global" && (
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
      )}

      {activeTab === "friends" && (
        <div>
          <div className="largePanel" style={{ marginBottom: "16px" }}>
            <h2 className="panelTitle">Add a Friend</h2>
            <p style={{ marginBottom: "10px" }}>
              Enter a username to add them to your friends list.
            </p>
            <div className="actionRow">
              <input
                type="text"
                placeholder="Enter username..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddFriend()}
                style={{
                  flex: 1,
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
              <button className="primaryButton" onClick={handleAddFriend}>
                Add Friend
              </button>
            </div>
            {addStatus && (
              <p style={{ marginTop: "8px", fontSize: "13px", color: "#555" }}>
                {addStatus}
              </p>
            )}
          </div>

          <div className="tablePanel">
            <div className="leaderboardHeader">
              <span>Rank</span>
              <span>User</span>
              <span>ELO</span>
              <span>Action</span>
            </div>
            {friends.length === 0 && (
              <p style={{ padding: "16px", color: "#888" }}>
                No friends added yet. Search for a username above.
              </p>
            )}
            {friends.map((user) => (
              <div className="leaderboardRow" key={user.id}>
                <span>{user.rank}</span>
                <span>{user.username}</span>
                <span>{user.elo}</span>
                <span>
                  <button
                    className="secondaryButton"
                    style={{ padding: "4px 10px", fontSize: "12px" }}
                    onClick={() => handleRemoveFriend(user.id)}
                  >
                    Remove
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </PageLayout>
  );
}

export default LeaderboardPage;