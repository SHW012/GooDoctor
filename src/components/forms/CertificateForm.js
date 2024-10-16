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
    "addButton removeButton";
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: ${(props) =>
    props.hasBorder ? "1px solid #87a1c9" : "none"}; /* 경계선 추가 */
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

const CertificateForm = () => {
  const [certificates, setCertificates] = useState([
    {
      id: Date.now(),
      certificate: "", // 자격사항
      issueDate: "", // 발급일
    },
  ]);

  const addCertificate = () => {
    setCertificates([
      ...certificates,
      {
        id: Date.now(),
        certificate: "",
        issueDate: "",
      },
    ]);
  };

  const removeCertificate = (id) => {
    if (certificates.length > 1) {
      setCertificates(certificates.filter((cert) => cert.id !== id));
    } else {
      setCertificates([
        {
          id: Date.now(),
          certificate: "",
          issueDate: "",
        },
      ]);
    }
  };

  const handleChange = (id, e) => {
    const updatedCertificates = certificates.map((cert) => {
      if (cert.id === id) {
        return { ...cert, [e.target.name]: e.target.value };
      }
      return cert;
    });
    setCertificates(updatedCertificates);
  };

  return (
    <FormContainer>
      {certificates.map((cert, index) => (
        <CertificationEntry key={cert.id} hasBorder={index > 0}>
          {" "}
          {/* 첫 항목 제외한 나머지에 선 추가 */}
          <FieldWrapper gridArea="certificate">
            <Label>자격사항</Label>
            <Input
              type="text"
              name="certificate"
              value={cert.certificate}
              onChange={(e) => handleChange(cert.id, e)}
              placeholder="자격사항"
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
          <AddButton onClick={addCertificate}>➕</AddButton>
          <ActionButton
            type="button"
            onClick={() => removeCertificate(cert.id)}
          >
            ✖
          </ActionButton>
        </CertificationEntry>
      ))}
    </FormContainer>
  );
};

export default CertificateForm;
