import React from "react";
import mockSessions from "../../data/mockSessions";

function PerformanceBreakdown() {
  // Calculate performance metrics from session data
  const totalSessions = mockSessions.length;
  const averageScore = Math.round(
    mockSessions.reduce((sum, session) => {
      const score = parseInt(session.score.replace('%', ''));
      return sum + score;
    }, 0) / totalSessions
  );

  const modePerformance = mockSessions.reduce((acc, session) => {
    if (!acc[session.mode]) {
      acc[session.mode] = { sessions: 0, totalScore: 0, bestScore: 0 };
    }
    const score = parseInt(session.score.replace('%', ''));
    acc[session.mode].sessions += 1;
    acc[session.mode].totalScore += score;
    acc[session.mode].bestScore = Math.max(acc[session.mode].bestScore, score);
    return acc;
  }, {});

  const strongestMode = Object.entries(modePerformance).reduce((best, [mode, data]) => {
    const avgScore = data.totalScore / data.sessions;
    return avgScore > (best.avgScore || 0) ? { mode, avgScore } : best;
  }, {}).mode;

  return (
    <div className="performanceBreakdown">
      <div className="breakdownSection">
        <h3>Performance by Mode</h3>
        <div className="modeBreakdownGrid">
          {Object.entries(modePerformance).map(([mode, data]) => {
            const avgScore = Math.round(data.totalScore / data.sessions);
            return (
              <div key={mode} className="modeBreakdownCard">
                <h4>{mode}</h4>
                <div className="modeStats">
                  <div className="stat">
                    <span className="statLabel">Sessions:</span>
                    <span className="statValue">{data.sessions}</span>
                  </div>
                  <div className="stat">
                    <span className="statLabel">Avg Score:</span>
                    <span className="statValue">{avgScore}%</span>
                  </div>
                  <div className="stat">
                    <span className="statLabel">Best Score:</span>
                    <span className="statValue">{data.bestScore}%</span>
                  </div>
                </div>
                <div className="performanceBar">
                  <div
                    className="performanceFill"
                    style={{ width: `${avgScore}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="breakdownSection">
        <h3>Recent Trends</h3>
        <div className="trendAnalysis">
          <p><strong>Strongest Mode:</strong> {strongestMode}</p>
          <p><strong>Improvement Areas:</strong> Focus on modes with scores below 80%</p>
          <p><strong>Consistency:</strong> {averageScore >= 85 ? 'Excellent' : averageScore >= 75 ? 'Good' : 'Needs improvement'}</p>
        </div>
      </div>
    </div>
  );
}

export default PerformanceBreakdown;