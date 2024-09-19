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
    "certificate issueDate"
    "language examCode"
    "score reIssueDate"
    "buttons buttons"; /* 버튼들을 같은 행에 배치 */
  align-items: center;
  padding-top: 20px;
  ${(props) =>
    props.hasBorder
      ? "border-top: 1px solid #87a1c9;"
      : ""}; /* 첫 번째 항목엔 구분선 제외 */
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
  padding: 10px;
  cursor: pointer;
  font-size: 24px;

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

  &:hover {
    text-decoration: underline;
  }
`;

const LanguageCertificationForm = () => {
  const [certifications, setCertifications] = useState([
    {
      id: Date.now(), // 고유한 ID 값 (자격증 항목)
      certificate: "", // 자격증 명칭을 저장하는 필드
      language: "", // 외국어 유형을 저장하는 필드 (영어, 중국어 등)
      examCode: "", // 외국어 시험 코드 (TOEFL, IELTS 등)
      score: "", // 시험 점수 또는 자격증 등급
      issueDate: "", // 자격증 발급일 (date 형식)
      reIssueDate: "", // 자격증 재발급일 (date 형식, 선택 사항)
    },
  ]);

  const addCertification = () => {
    setCertifications([
      ...certifications,
      {
        id: Date.now(),
        certificate: "",
        language: "",
        examCode: "",
        score: "",
        issueDate: "",
        reIssueDate: "",
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
          certificate: "",
          language: "",
          examCode: "",
          score: "",
          issueDate: "",
          reIssueDate: "",
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
          <FieldWrapper gridArea="certificate">
            <Label htmlFor={`certificate-${cert.id}`}>자격사항</Label>
            <Input
              id={`certificate-${cert.id}`}
              type="text"
              name="certificate"
              value={cert.certificate}
              onChange={(e) => handleChange(cert.id, e)}
              placeholder="자격사항"
            />
          </FieldWrapper>
          <FieldWrapper gridArea="issueDate">
            <Label htmlFor={`issueDate-${cert.id}`}>발급일</Label>
            <Input
              id={`issueDate-${cert.id}`}
              type="date"
              name="issueDate"
              value={cert.issueDate}
              onChange={(e) => handleChange(cert.id, e)}
            />
          </FieldWrapper>
          <FieldWrapper gridArea="language">
            <Label htmlFor={`language-${cert.id}`}>외국어 유형</Label>
            <LanguageSelect
              id={`language-${cert.id}`}
              name="language"
              value={cert.language}
              onChange={(e) => handleChange(cert.id, e)}
            >
              <option value="">외국어 유형 선택</option>
              <option value="영어">영어</option>
              <option value="중국어">중국어</option>
              <option value="일본어">일본어</option>
            </LanguageSelect>
          </FieldWrapper>
          <FieldWrapper gridArea="examCode">
            <Label htmlFor={`examCode-${cert.id}`}>외국어 시험코드</Label>
            <Input
              id={`examCode-${cert.id}`}
              type="text"
              name="examCode"
              value={cert.examCode}
              onChange={(e) => handleChange(cert.id, e)}
              placeholder="외국어 시험코드"
            />
          </FieldWrapper>
          <FieldWrapper gridArea="score">
            <Label htmlFor={`score-${cert.id}`}>점수</Label>
            <Input
              id={`score-${cert.id}`}
              type="text"
              name="score"
              value={cert.score}
              onChange={(e) => handleChange(cert.id, e)}
              placeholder="점수"
            />
          </FieldWrapper>
          <FieldWrapper gridArea="reIssueDate">
            <Label htmlFor={`reIssueDate-${cert.id}`}>재발급일</Label>
            <Input
              id={`reIssueDate-${cert.id}`}
              type="date"
              name="reIssueDate"
              value={cert.reIssueDate}
              onChange={(e) => handleChange(cert.id, e)}
            />
          </FieldWrapper>
          <ButtonsContainer>
            <AddButton onClick={addCertification}>➕</AddButton>
            <ActionButton
              type="button"
              onClick={() => removeCertification(cert.id)}
            >
              ✖
            </ActionButton>
          </ButtonsContainer>
        </CertificationEntry>
      ))}
    </FormContainer>
  );
};

export default LanguageCertificationForm;
