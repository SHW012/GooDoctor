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

// Individual Experience Entry
const ExperienceEntry = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  grid-template-areas:
    "companyLabel startDateLabel"
    "company startDate"
    "roleLabel endDateLabel"
    "role endDate"
    "descriptionLabel descriptionLabel"
    "description description"
    "addButton removeButton";
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  ${(props) => (props.hasBorder ? "border-top: 1px solid #87a1c9;" : "")};
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
  font-size: 24px;
  grid-area: removeButton;
  cursor: pointer;
  justify-self: end;
  align-self: center;

  &:hover {
    color: #c0392b;
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
  justify-self: start;

  &:hover {
    text-decoration: underline;
  }
`;

const ExperienceForm = () => {
  const [experiences, setExperiences] = useState([
    {
      id: Date.now(),
      company: "", // 회사명
      role: "", // 담당 직무
      startDate: "", // 시작일
      endDate: "", // 종료일
      description: "", // 활동 내용
    },
  ]);

  const addExperience = () => {
    setExperiences([
      ...experiences,
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

  const removeExperience = (id) => {
    if (experiences.length > 1) {
      setExperiences(experiences.filter((experience) => experience.id !== id));
    } else {
      setExperiences([
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
    const updatedExperiences = experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, [e.target.name]: e.target.value };
      }
      return experience;
    });
    setExperiences(updatedExperiences);
  };

  return (
    <FormContainer>
      {experiences.map((experience, index) => (
        <ExperienceEntry key={experience.id} hasBorder={index > 0}>
          <Label style={{ gridArea: "companyLabel" }}>회사명</Label>
          <Label style={{ gridArea: "startDateLabel" }}>시작 년월</Label>
          <Input
            type="text"
            name="company"
            value={experience.company}
            onChange={(e) => handleChange(experience.id, e)}
            placeholder="회사명"
            style={{ gridArea: "company" }}
          />
          <Input
            type="month"
            name="startDate"
            value={experience.startDate}
            onChange={(e) => handleChange(experience.id, e)}
            style={{ gridArea: "startDate" }}
          />

          <Label style={{ gridArea: "roleLabel" }}>담당직무</Label>
          <Label style={{ gridArea: "endDateLabel" }}>종료 년월</Label>
          <Input
            type="text"
            name="role"
            value={experience.role}
            onChange={(e) => handleChange(experience.id, e)}
            placeholder="담당직무"
            style={{ gridArea: "role" }}
          />
          <Input
            type="month"
            name="endDate"
            value={experience.endDate}
            onChange={(e) => handleChange(experience.id, e)}
            style={{ gridArea: "endDate" }}
          />

          <Label style={{ gridArea: "descriptionLabel" }}>활동 내용</Label>
          <Textarea
            name="description"
            value={experience.description}
            onChange={(e) => handleChange(experience.id, e)}
            placeholder="활동 내용"
            style={{ gridArea: "description" }}
          />
          <AddButton onClick={addExperience}>➕</AddButton>
          <ActionButton
            type="button"
            onClick={() => removeExperience(experience.id)}
          >
            ✖
          </ActionButton>
        </ExperienceEntry>
      ))}
    </FormContainer>
  );
};

export default ExperienceForm;
