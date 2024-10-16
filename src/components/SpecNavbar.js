import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
  height: 60px;
`;

const NavTab = styled.button`
  padding: 16px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.isActive ? "#333" : "#e0e0e0")};
  color: ${(props) => (props.isActive ? "white" : "black")};
  cursor: pointer;
  font-size: 16px;
  width: 120px;
  font-weight: bold;

  &:hover {
    background-color: #666;
  }
`;

const SpecNavbar = ({ selectedTab, setSelectedTab }) => {
  const tabs = [
    "학력",
    "어학",
    "자격증",
    "수상",
    "교내외활동",
    "인턴십/경력",
    "강점/약점",
  ];

  return (
    <Navbar>
      {tabs.map((tab) => (
        <NavTab
          key={tab}
          isActive={selectedTab === tab}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </NavTab>
      ))}
    </Navbar>
  );
};

export default SpecNavbar;
