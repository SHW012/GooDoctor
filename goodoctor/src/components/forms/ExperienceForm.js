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

// Individual Activity Entry
const ActivityEntry = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* 두 개의 열로 나눔 */
  gap: 20px;
  grid-template-areas:
    "companyLabel startDateLabel"
    "company startDate"
    "roleLabel endDateLabel"
    "role endDate"
    "descriptionLabel descriptionLabel"
    "description description"
    "addButton removeButton"; /* 각 필드의 위치를 지정 */
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  ${(props) =>
    props.hasBorder
      ? "border-top: 1px solid #87a1c9;"
      : ""}; /* 첫 번째 항목에선 구분선 제외 */
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
  grid-area: description; /* 그리드에서 description 위치 */
`;

// Label
const Label = styled.label`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  align-self: center;
`;

// Action Buttons (X 표시)
const ActionButton = styled.button`
  background-color: transparent;
  color: #f44336;
  border: none;
  font-size: 24px; /* X 크기 설정 */
  grid-area: removeButton;
  cursor: pointer;
  justify-self: end; /* 오른쪽 정렬 */
  align-self: center; /* 세로 정렬 */

  &:hover {
    color: #c0392b; /* 호버 시 색상 변경 */
  }
`;

// Add Button
const AddButton = styled.div`
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #4a90e2;
  grid-area: addButton;
  justify-self: start; /* 왼쪽 정렬 */

  &:hover {
    text-decoration: underline;
  }
`;

const ActivitiesForm = () => {
  const [activities, setActivities] = useState([
    {
      id: Date.now(),
      company: "", // 회사명
      role: "", // 담당 직무
      startDate: "", // 시작일
      endDate: "", // 종료일
      description: "", // 활동 내용
    },
  ]);

  const addActivity = () => {
    setActivities([
      ...activities,
      {
        id: Date.now(),
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeActivity = (id) => {
    if (activities.length > 1) {
      setActivities(activities.filter((activity) => activity.id !== id));
    } else {
      setActivities([
        {
          id: Date.now(),
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ]);
    }
  };

  const handleChange = (id, e) => {
    const updatedActivities = activities.map((activity) => {
      if (activity.id === id) {
        return { ...activity, [e.target.name]: e.target.value };
      }
      return activity;
    });
    setActivities(updatedActivities);
  };

  return (
    <FormContainer>
      {activities.map((activity, index) => (
        <ActivityEntry key={activity.id} hasBorder={index > 0}>
          <Label style={{ gridArea: "companyLabel" }}>회사명</Label>
          <Label style={{ gridArea: "startDateLabel" }}>시작 년월</Label>
          <Input
            type="text"
            name="company"
            value={activity.company}
            onChange={(e) => handleChange(activity.id, e)}
            placeholder="회사명"
            style={{ gridArea: "company" }}
          />
          <Input
            type="month"
            name="startDate"
            value={activity.startDate}
            onChange={(e) => handleChange(activity.id, e)}
            style={{ gridArea: "startDate" }}
          />

          <Label style={{ gridArea: "roleLabel" }}>담당직무</Label>
          <Label style={{ gridArea: "endDateLabel" }}>종료 년월</Label>
          <Input
            type="text"
            name="role"
            value={activity.role}
            onChange={(e) => handleChange(activity.id, e)}
            placeholder="담당직무"
            style={{ gridArea: "role" }}
          />
          <Input
            type="month"
            name="endDate"
            value={activity.endDate}
            onChange={(e) => handleChange(activity.id, e)}
            style={{ gridArea: "endDate" }}
          />

          <Label style={{ gridArea: "descriptionLabel" }}>활동 내용</Label>
          <Textarea
            name="description"
            value={activity.description}
            onChange={(e) => handleChange(activity.id, e)}
            placeholder="활동 내용"
            style={{ gridArea: "description" }}
          />
          <AddButton onClick={addActivity}>➕</AddButton>
          <ActionButton
            type="button"
            onClick={() => removeActivity(activity.id)}
          >
            ✖
          </ActionButton>
        </ActivityEntry>
      ))}
    </FormContainer>
  );
};

export default ActivitiesForm;
