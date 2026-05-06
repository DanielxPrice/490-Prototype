import React from "react";

function AnalyticsStatCard({ label, value, description, trend }) {
  return (
    <div className="analyticsCard">
      <h2>{label}</h2>
      <p className="analyticsValue">{value}</p>
      {trend && (
        <p className={`analyticsTrend ${trend > 0 ? 'positive' : trend < 0 ? 'negative' : 'neutral'}`}>
          {trend > 0 ? '↗' : trend < 0 ? '↘' : '→'} {Math.abs(trend)}%
        </p>
      )}
      <p className="analyticsDescription">{description}</p>
    </div>
  );
}

export default AnalyticsStatCard;