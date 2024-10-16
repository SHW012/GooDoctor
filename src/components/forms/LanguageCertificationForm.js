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

// Individual Certification Entry
const CertificationEntry = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  grid-template-areas:
    "language examCode"
    "score issueDate"
    "addButton removeButton";
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: ${(props) => (props.hasBorder ? "1px solid #87a1c9" : "none")};
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

// Select Field
const LanguageSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f6fa;
  font-size: 16px;
`;

// Label Style
const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;

// Styled Field Wrapper to group input and label
const FieldWrapper = styled.div`
  grid-area: ${(props) => props.gridArea};
`;

// Action Buttons (Buttons Container)
const AddButton = styled.div`
  grid-area: addButton;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #4a90e2;
  justify-self: start;

  &:hover {
    text-decoration: underline;
  }
`;

// Delete Button
const ActionButton = styled.button`
  grid-area: removeButton;
  background-color: transparent;
  color: #f44336;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  justify-self: end;

  &:hover {
    color: #c0392b;
  }
`;

const LanguageCertificationForm = () => {
  const [certifications, setCertifications] = useState([
    {
      id: Date.now(),
      language: "", // 외국어 유형
      examCode: "", // 외국어 시험 코드
      score: "", // 시험 점수 또는 자격증 등급
      issueDate: "", // 자격증 발급일 (date 형식)
    },
  ]);

  const addCertification = () => {
    setCertifications([
      ...certifications,
      {
        id: Date.now(),
        language: "",
        examCode: "",
        score: "",
        issueDate: "",
      },
    ]);
  };

  const removeCertification = (id) => {
    if (certifications.length > 1) {
      setCertifications(certifications.filter((cert) => cert.id !== id));
    } else {
      setCertifications([
        {
          id: Date.now(),
          language: "",
          examCode: "",
          score: "",
          issueDate: "",
        },
      ]);
    }
  };

  const handleChange = (id, e) => {
    const updatedCertifications = certifications.map((cert) => {
      if (cert.id === id) {
        return { ...cert, [e.target.name]: e.target.value };
      }
      return cert;
    });
    setCertifications(updatedCertifications);
  };

  return (
    <FormContainer>
      {certifications.map((cert, index) => (
        <CertificationEntry key={cert.id} hasBorder={index > 0}>
          <FieldWrapper gridArea="language">
            <Label>외국어 유형</Label>
            <LanguageSelect
              name="language"
              value={cert.language}
              onChange={(e) => handleChange(cert.id, e)}
            >
              <option value="">선택</option>
              <option value="영어">영어</option>
              <option value="중국어">중국어</option>
              <option value="일본어">일본어</option>
            </LanguageSelect>
          </FieldWrapper>

          <FieldWrapper gridArea="examCode">
            <Label>외국어 시험 코드</Label>
            <Input
              type="text"
              name="examCode"
              value={cert.examCode}
              onChange={(e) => handleChange(cert.id, e)}
              placeholder="시험 코드"
            />
          </FieldWrapper>

          <FieldWrapper gridArea="score">
            <Label>점수</Label>
            <Input
              type="text"
              name="score"
              value={cert.score}
              onChange={(e) => handleChange(cert.id, e)}
              placeholder="점수"
            />
          </FieldWrapper>

          <FieldWrapper gridArea="issueDate">
            <Label>발급일</Label>
            <Input
              type="date"
              name="issueDate"
              value={cert.issueDate}
              onChange={(e) => handleChange(cert.id, e)}
            />
          </FieldWrapper>

          <AddButton onClick={addCertification}>➕</AddButton>
          <ActionButton
            type="button"
            onClick={() => removeCertification(cert.id)}
          >
            ✖
          </ActionButton>
        </CertificationEntry>
      ))}
    </FormContainer>
  );
};

export default LanguageCertificationForm;
