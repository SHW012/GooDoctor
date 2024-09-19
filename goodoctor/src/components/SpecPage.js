import React, { useState } from "react"; // useState를 React에서 가져옴
import SpecNavbar from "./SpecNavbar.js";
import SpecContent from "./SpecContent.js";
import SpecButtons from "./SpecButtons.js";
import "./SpecPage.css"; // CSS 파일을 import 합니다.

const SpecPage = () => {
  const [selectedTab, setSelectedTab] = useState("학력");

  return (
    <div>
      <h1 className="spec-title">나의 스펙</h1>
      <SpecNavbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <div className="spec-container">
        <div className="spec-content">
          <SpecContent selectedTab={selectedTab} />
        </div>
      </div>

      {/* 저장과 피드백 버튼을 컨테이너 밖으로 이동 */}
      <div className="spec-buttons-outside">
        <SpecButtons />
      </div>
    </div>
  );
};

export default SpecPage;
