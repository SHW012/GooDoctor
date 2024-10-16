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
    "activityLabel startDateLabel"
    "activityInput startDateInput"
    "roleLabel endDateLabel"
    "roleInput endDateInput"
    "descriptionLabel descriptionLabel"
    "descriptionInput descriptionInput"
    "buttons buttons"; /* 버튼들을 같은 행에 배치 */
  align-items: center;
  padding-top: 20px; /* 각 항목 간의 여백 */
  ${(props) =>
    props.hasBorder
      ? "border-top: 1px solid #87a1c9;"
      : ""} /* 첫 번째 항목에는 구분선을 표시하지 않음 */
  padding-bottom: 20px;
`;

// Label
const Label = styled.label`
  font-size: 16px;
  color: #333;
  font-weight: bold; /* 라벨 글씨 굵게 설정 */
  align-self: center;
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
  grid-column: span 2; /* Description field will take up both columns */
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f6fa;
  font-size: 16px;
  resize: none;
  height: 120px; /* 높이를 좀 더 높임 */
`;

// Styled grid-area for input fields
const ActivityNameInput = styled(Input)`
  grid-area: activityInput;
`;

const RoleInput = styled(Input)`
  grid-area: roleInput;
`;

const StartDateInput = styled(Input)`
  grid-area: startDateInput;
`;

const EndDateInput = styled(Input)`
  grid-area: endDateInput;
`;

// Action Buttons (컨테이너)
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
    color: #c0392b; /* 호버 시 색상 변경 */
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

const ActivitiesForm = () => {
  const [activities, setActivities] = useState([
    {
      id: Date.now(),
      activityName: "", // 활동명 또는 프로젝트명
      role: "", // 담당 역할
      description: "", // 활동 설명
      startDate: "", // 시작일
      endDate: "", // 종료일
    },
  ]);

  const addActivity = () => {
    setActivities([
      ...activities,
      {
        id: Date.now(),
        activityName: "",
        role: "",
        description: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const removeActivity = (id) => {
    if (activities.length > 1) {
      setActivities(activities.filter((activity) => activity.id !== id));
    } else {
      // // 하나만 남았을 때는 삭제하지 않음
      // // 사용자에게 알림을 제공
      // setNotification("최소 하나의 수상 항목은 남아있어야 합니다.");
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
          {/* 각 라벨 및 입력 필드를 나란히 정렬 */}
          <Label>교내외 활동 (프로젝트명)</Label>
          <Label>시작 년월</Label>
          <ActivityNameInput
            type="text"
            name="activityName"
            value={activity.activityName}
            onChange={(e) => handleChange(activity.id, e)}
            placeholder="교내외 활동(프로젝트명)"
          />
          <StartDateInput
            type="date"
            name="startDate"
            value={activity.startDate}
            onChange={(e) => handleChange(activity.id, e)}
            placeholder="시작년월"
          />

          <Label>담당 역할</Label>
          <Label>종료 년월</Label>
          <RoleInput
            type="text"
            name="role"
            value={activity.role}
            onChange={(e) => handleChange(activity.id, e)}
            placeholder="담당 역할"
          />
          <EndDateInput
            type="date"
            name="endDate"
            value={activity.endDate}
            onChange={(e) => handleChange(activity.id, e)}
            placeholder="종료년월"
          />

          {/* 활동 내용 라벨과 입력 필드 나란히 배치 */}
          <Label>활동 내용</Label>
          <Textarea
            name="description"
            value={activity.description}
            onChange={(e) => handleChange(activity.id, e)}
            placeholder="활동 내용"
          />

          {/* 버튼들을 같은 행에 배치 */}
          <ButtonsContainer>
            <AddButton type="button" onClick={addActivity}>
              ➕
            </AddButton>
            <ActionButton
              type="button"
              onClick={() => removeActivity(activity.id)}
            >
              ✖
            </ActionButton>
          </ButtonsContainer>
        </ActivityEntry>
      ))}
    </FormContainer>
  );
};

export default ActivitiesForm;
