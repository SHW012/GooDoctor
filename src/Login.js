import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

const LoginContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
  margin: 20px auto;
  margin-top: 40px;
`;

const LoginLogo = styled.img`
  max-width: 80%;
  height: auto;
  margin: 0 auto 30px;
  display: block;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 25px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  font-size: 18px;
  border-radius: 12px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #4a4a4a;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #333;
  }
`;

const SignUpLink = styled.p`
  margin-top: 30px; /* 위쪽에 30px 간격 추가 */
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

const Login = () => {
  return (
    <LoginContainer>
      <LoginLogo src={logo} alt="구박사 로고" />
      <InputField type="email" placeholder="이메일/ID" />
      <InputField type="password" placeholder="비밀번호" />
      <SubmitButton>로그인</SubmitButton>
      <SignUpLink>
        처음이신가요? <Link to="/signup">회원가입</Link>
      </SignUpLink>
    </LoginContainer>
  );
};

export default Login;
