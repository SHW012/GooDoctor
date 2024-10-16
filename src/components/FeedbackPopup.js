import React from "react";
import styled from "styled-components";

// Styled-component for the enlarged feedback popup
const FeedbackPopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #edf2f7;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 50px;
  width: 800px;
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

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #e0e6ed;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: left;
  font-size: 18px;
`;

const Input = styled.input`
  width: calc(100% - 50px);
  padding: 16px;
  margin-bottom: 30px;
  border: 1px solid #cbd5e0;
  border-radius: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 16px 32px;
  background-color: #e0e6ed;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background-color: #c2cbd3;
  }
`;

const FeedbackPopup = ({ isVisible, onClose }) => {
  return (
    <>
      <Overlay isVisible={isVisible} onClick={onClose} />
      <FeedbackPopupContainer isVisible={isVisible}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h3>피드백을 받고 싶은 희망 기업과 직무를 입력해주세요.</h3>
        <form>
          <Label>희망 기업:</Label>
          <Input type="text" placeholder="기업명을 입력하세요" />
          <Label>희망 직무:</Label>
          <Input type="text" placeholder="직무를 입력하세요" />
          <SubmitButton type="submit">피드백 받기</SubmitButton>
        </form>
      </FeedbackPopupContainer>
    </>
  );
};

export default FeedbackPopup;
