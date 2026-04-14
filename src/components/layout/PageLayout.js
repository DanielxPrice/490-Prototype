import React from "react";
import Sidebar from "./Sidebar";

function PageLayout({ title, subtitle, currentPage, onNavigate, children }) {
  return (
    <div className="appLayout">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />

      <main className="mainContent">
        <div className="pageHeader">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

        <div className="pageBody">{children}</div>
      </main>
    </div>
  );
}

export default PageLayout;