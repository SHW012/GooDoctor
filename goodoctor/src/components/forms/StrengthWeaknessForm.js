import React from "react";
import styled from "styled-components";

// Form Container
const FormContainer = styled.div`
  background-color: #d4deea;
  padding: 20px;
  border-radius: 10px;
  max-width: 1200px; /* 너비를 적절히 조정 */
  margin: 20px auto;
  border: 2px solid #87a1c9;
  height: 415px; /* 고정된 높이 대신 자동으로 높이 조정 */
`;

// Label Style
const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;

// Textarea for Strength and Weakness
const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f6fa;
  font-size: 16px;
  resize: none;
  height: 150px;
  margin-bottom: 20px;
`;

const StrengthWeaknessForm = () => {
  return (
    <FormContainer>
      <div>
        <Label htmlFor="strength">강점</Label>
        <Textarea id="strength" placeholder="강점"></Textarea>
      </div>
      <div>
        <Label htmlFor="weakness">약점</Label>
        <Textarea id="weakness" placeholder="약점"></Textarea>
      </div>
    </FormContainer>
  );
};

export default StrengthWeaknessForm;
