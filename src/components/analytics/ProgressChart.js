import React from "react";
import mockSessions from "../../data/mockSessions";

function ProgressChart() {
  // Create chart data from sessions
  const chartData = mockSessions.slice(-5).reverse().map((session, index) => ({
    label: `Session ${index + 1}`,
    score: parseInt(session.score.replace('%', '')),
    date: session.date,
    mode: session.mode
  }));

  const maxScore = 100;
  const chartHeight = 200;

  return (
    <div className="progressChart">
      <div className="chartContainer">
        {chartData.map((data, index) => (
          <div key={index} className="chartColumn">
            <div className="chartBarContainer">
              <div
                className="chartBarFill"
                style={{
                  height: `${(data.score / maxScore) * chartHeight}px`,
                  backgroundColor: data.score >= 80 ? '#10b981' : data.score >= 60 ? '#f59e0b' : '#ef4444'
                }}
                title={`${data.mode}: ${data.score}% on ${data.date}`}
              ></div>
            </div>
            <div className="chartLabel">{data.label}</div>
          </div>
        ))}
      </div>
      <div className="chartLegend">
        <div className="legendItem">
          <div className="legendColor" style={{ backgroundColor: '#10b981' }}></div>
          <span>80%+</span>
        </div>
        <div className="legendItem">
          <div className="legendColor" style={{ backgroundColor: '#f59e0b' }}></div>
          <span>60-79%</span>
        </div>
        <div className="legendItem">
          <div className="legendColor" style={{ backgroundColor: '#ef4444' }}></div>
          <span>&lt;60%</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressChart;