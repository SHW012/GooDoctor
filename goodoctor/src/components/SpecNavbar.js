import React from "react";

const SpecNavbar = ({ selectedTab, setSelectedTab }) => {
  const tabs = [
    "학력",
    "어학/자격증",
    "수상",
    "교내외활동",
    "인턴십/경력",
    "강점/약점",
  ];

  return (
    <nav className="spec-navbar">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`nav-tab ${selectedTab === tab ? "active" : ""}`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default SpecNavbar;
