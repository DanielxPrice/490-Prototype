import React from "react";
import PageLayout from "../components/layout/PageLayout";
import AnalyticsStatCard from "../components/analytics/AnalyticsStatCard";
import PerformanceBreakdown from "../components/analytics/PerformanceBreakdown";
import ProgressChart from "../components/analytics/ProgressChart";
import mockAnalytics from "../data/mockAnalytics";

function AnalyticsPage({ currentPage, onNavigate }) {
  return (
    <PageLayout
      title="Analytics"
      subtitle="Track progress over time."
      currentPage={currentPage}
      onNavigate={onNavigate}
    >
      <div className="analyticsGrid">
        {mockAnalytics.map((item) => (
          <AnalyticsStatCard
            key={item.id}
            label={item.label}
            value={item.value}
            description={item.description}
          />
        ))}
      </div>

      <div className="largePanel">
        <h2 className="panelTitle">Progress Over Time</h2>
        <ProgressChart />
      </div>

      <div className="largePanel">
        <h2 className="panelTitle">Performance Breakdown</h2>
        <PerformanceBreakdown />
      </div>
    </PageLayout>
  );
}

export default AnalyticsPage;