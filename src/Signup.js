import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./assets/logo.png";

const FormContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  max-width: 430px;
  width: 100%;
  height: 97vh; /* 화면의 80% 높이를 차지 */
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SignupLogo = styled.img`
  max-width: 80%;
  height: auto;
  margin-bottom: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const InputField = styled.input`
  width: 100%;
  padding: 16px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  font-size: 16px;
  border-radius: 10px;
  background-color: #f9f9f9;
  &:focus {
    border-bottom: 2px solid #4a4a4a;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 13px;
  background-color: #4a4a4a;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 10px;

  &:hover {
    background-color: #333;
  }
`;

const SignUpLink = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;

  a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const SignUp = () => {
  return (
    <FormContainer>
      <SignupLogo src={logo} alt="구박사 로고" />
      <InputField type="text" placeholder="이름" />
      <InputField type="text" placeholder="연락처" />
      <InputField type="email" placeholder="이메일/ID" />
      <InputField type="password" placeholder="비밀번호" />
      <InputField type="password" placeholder="비밀번호 확인" />
      <SubmitButton>회원가입</SubmitButton>
      <SignUpLink>
        이미 회원이신가요? <Link to="/login">로그인</Link>
      </SignUpLink>
    </FormContainer>
  );
};

export default SignUp;
