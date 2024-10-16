import React, { useState } from "react";
import FeedbackPopup from "./FeedbackPopup.js";
import styled from "styled-components";

// Styled component for SpecButtons container
const SpecButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SpecButtons = () => {
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const toggleFeedback = () => {
    setIsFeedbackVisible((prev) => !prev);
  };

  return (
    <SpecButtonsContainer>
      <button>저장</button>
      <button onClick={toggleFeedback}>피드백</button>

      {/* 피드백 팝업창 */}
      <FeedbackPopup isVisible={isFeedbackVisible} onClose={toggleFeedback} />
    </SpecButtonsContainer>
  );
};

export default SpecButtons;
