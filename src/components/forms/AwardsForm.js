import React, { useState } from "react";
import styled from "styled-components";

// Form Container
const FormContainer = styled.div`
  background-color: #d4deea;
  padding: 20px;
  border-radius: 10px;
  max-width: 900px;
  margin: 20px auto;
  border: 2px solid #87a1c9;
`;

// Individual Award Entry
const AwardEntry = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  grid-template-areas:
    "awardName awardName"
    "organization date"
    "description description"
    "buttons buttons"; /* 버튼들을 같은 행에 배치 */
  align-items: center;
  padding-top: 20px;
  ${(props) =>
    props.hasBorder
      ? "border-top: 1px solid #87a1c9;"
      : ""} /* 첫 번째 항목엔 구분선 제외 */
  padding-bottom: 20px;
`;

// Input Field
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f6fa;
  font-size: 16px;
`;

// Textarea for Description
const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f6fa;
  font-size: 16px;
  resize: none;
  height: 100px;
  grid-area: description;
`;

// Label Style
const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;

// Styled grid-area for input fields
const FieldWrapper = styled.div`
  grid-area: ${(props) => props.gridArea};
`;

// Buttons Container
const ButtonsContainer = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: space-between; /* 두 버튼을 양 끝에 배치 */
  align-items: center;
`;

// Delete Button
const ActionButton = styled.button`
  background-color: transparent;
  color: #f44336;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 20px; /* 아이콘 크기 조정 */

  &:hover {
    color: #c0392b;
  }
`;

// Add Button
const AddButton = styled.button`
  background-color: transparent;
  color: #4a90e2;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 20px; /* 아이콘 크기 조정 */

  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

// Optional: Notification Message
const Notification = styled.div`
  margin-top: 10px;
  color: #e74c3c;
  font-size: 14px;
`;

const AwardsForm = () => {
  const [awards, setAwards] = useState([
    {
      id: Date.now(),
      awardName: "", // 수상명
      organization: "", // 수상기관
      description: "", // 활동 내용
      date: "", // 수상일
    },
  ]);

  const [notification, setNotification] = useState("");

  const addAward = () => {
    setAwards([
      ...awards,
      {
        id: Date.now(),
        awardName: "",
        organization: "",
        description: "",
        date: "",
      },
    ]);
    setNotification("");
  };

  const removeAward = (id) => {
    if (awards.length > 1) {
      setAwards(awards.filter((award) => award.id !== id));
      setNotification("");
    } else {
      // // 하나만 남았을 때는 삭제하지 않음
      // // 사용자에게 알림을 제공
      // setNotification("최소 하나의 수상 항목은 남아있어야 합니다.");
    }
  };

  const handleChange = (id, e) => {
    const updatedAwards = awards.map((award) => {
      if (award.id === id) {
        return { ...award, [e.target.name]: e.target.value };
      }
      return award;
    });
    setAwards(updatedAwards);
  };

  return (
    <FormContainer>
      {awards.map((award, index) => (
        <AwardEntry key={award.id} hasBorder={index > 0}>
          <FieldWrapper gridArea="awardName">
            <Label htmlFor={`awardName-${award.id}`}>수상명</Label>
            <Input
              id={`awardName-${award.id}`}
              type="text"
              name="awardName"
              value={award.awardName}
              onChange={(e) => handleChange(award.id, e)}
              placeholder="수상명"
            />
          </FieldWrapper>
          <FieldWrapper gridArea="organization">
            <Label htmlFor={`organization-${award.id}`}>수상기관</Label>
            <Input
              id={`organization-${award.id}`}
              type="text"
              name="organization"
              value={award.organization}
              onChange={(e) => handleChange(award.id, e)}
              placeholder="수상기관"
            />
          </FieldWrapper>
          <FieldWrapper gridArea="date">
            <Label htmlFor={`date-${award.id}`}>수상일</Label>
            <Input
              id={`date-${award.id}`}
              type="date"
              name="date"
              value={award.date}
              onChange={(e) => handleChange(award.id, e)}
            />
          </FieldWrapper>
          <FieldWrapper gridArea="description">
            <Label htmlFor={`description-${award.id}`}>활동 내용</Label>
            <Textarea
              id={`description-${award.id}`}
              name="description"
              value={award.description}
              onChange={(e) => handleChange(award.id, e)}
              placeholder="활동 내용"
            />
          </FieldWrapper>
          {/* 버튼들을 같은 행에 배치 */}
          <ButtonsContainer>
            <AddButton type="button" onClick={addAward}>
              ➕
            </AddButton>
            <ActionButton type="button" onClick={() => removeAward(award.id)}>
              ✖
            </ActionButton>
          </ButtonsContainer>
        </AwardEntry>
      ))}
      {notification && <Notification>{notification}</Notification>}
    </FormContainer>
  );
};

export default AwardsForm;
