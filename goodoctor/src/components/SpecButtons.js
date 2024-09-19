import React, { useState } from "react";
import styled from "styled-components";

// Styled-component for the enlarged feedback popup
const FeedbackPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #edf2f7; /* 밝은 회색 배경 */
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 50px; /* 패딩을 늘려 크기를 키움 */
  width: 800px; /* 폭을 넓게 설정 */
  z-index: 1000;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  text-align: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

// CloseButton 색상 변경: #E0E6ED
const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #e0e6ed; /* 닫기 버튼 색상 */
`;

const Label = styled.label`
  display: block;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: left;
  font-size: 18px; /* 글자 크기를 키움 */
`;

const Input = styled.input`
  width: calc(100% - 50px); /* 입력 필드 크기 조정 */
  padding: 16px; /* 입력 필드 패딩 키움 */
  margin-bottom: 30px;
  border: 1px solid #cbd5e0;
  border-radius: 5px;
  font-size: 16px; /* 글자 크기 키움 */
`;

// SubmitButton 색상 변경: #E0E6ED
const SubmitButton = styled.button`
  padding: 16px 32px; /* 버튼 크기 키움 */
  background-color: #e0e6ed; /* 피드백 받기 버튼 색상 */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background-color: #c2cbd3; /* 호버 시 색상 변경 */
  }
`;

const SpecButtons = () => {
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const toggleFeedback = () => {
    setIsFeedbackVisible((prev) => !prev);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <button>저장</button>
      <button onClick={toggleFeedback}>피드백</button>

      {/* Overlay to darken background */}
      <Overlay isVisible={isFeedbackVisible} onClick={toggleFeedback} />

      {/* Enlarged Feedback Popup */}
      <FeedbackPopup isVisible={isFeedbackVisible}>
        <CloseButton onClick={toggleFeedback}>X</CloseButton>
        <h3>피드백을 받고 싶은 희망 기업과 직무를 입력해주세요.</h3>
        <form>
          <Label>희망 기업:</Label>
          <Input type="text" placeholder="기업명을 입력하세요" />
          <Label>희망 직무:</Label>
          <Input type="text" placeholder="직무를 입력하세요" />
          <SubmitButton type="submit">피드백 받기</SubmitButton>
        </form>
      </FeedbackPopup>
    </div>
  );
};

export default SpecButtons;
