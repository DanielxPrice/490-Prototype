import React from "react";
import PageLayout from "../components/layout/PageLayout";
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
          <div className="analyticsCard" key={item.id}>
            <h2>{item.label}</h2>
            <p className="analyticsValue">{item.value}</p>
            <p className="analyticsDescription">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="largePanel">
        <h2 className="panelTitle">Progress Chart Placeholder</h2>
        <div className="chartPlaceholder">
          <div className="chartBar chartBar1"></div>
          <div className="chartBar chartBar2"></div>
          <div className="chartBar chartBar3"></div>
          <div className="chartBar chartBar4"></div>
          <div className="chartBar chartBar5"></div>
        </div>
      </div>
    </PageLayout>
  );
}

export default AnalyticsPage;