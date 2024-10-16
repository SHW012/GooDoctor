import React from "react";
import styled from "styled-components";

// 폼 컨테이너 스타일
const FormContainer = styled.div`
  background-color: #d4deea;
  padding: 20px;
  border-radius: 10px;
  max-width: 1000px; /* 네비게이션 바와 맞춘 너비 */
  margin: 20px auto;
  border: 2px solid #87a1c9;
  height: 415px; /* 고정된 높이 */
`;

// 입력 그룹 스타일
const InputGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  label {
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: bold;
  }
  input {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    font-size: 16px;
    background-color: #f5f6fa;
  }
`;

// 학점 입력 필드 스타일
const GradeInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input,
  select {
    width: 48%; /* 각 필드의 너비를 48%로 설정 */
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f5f6fa;
    font-size: 16px;
  }
`;

const EducationForm = () => {
  return (
    <FormContainer>
      <InputGroup>
        <label>학교명</label>
        <input type="text" placeholder="학교명을 입력하세요" />
      </InputGroup>
      <InputGroup>
        <label>전공</label>
        <input type="text" placeholder="전공을 입력하세요" />
      </InputGroup>
      <InputGroup>
        <label>학점</label>
        <GradeInputs>
          <input type="text" placeholder="학점을 입력하세요" />
          <select>
            <option value="4.5">4.5</option>
            <option value="4.3">4.3</option>
          </select>
        </GradeInputs>
      </InputGroup>
    </FormContainer>
  );
};

export default EducationForm;
