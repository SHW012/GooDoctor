import React from "react";
import "./LandingPage.css"; // CSS 파일을 src 폴더 안에 위치시킨 후 경로 수정
import logo from "./assets/logo.png"; // 이미지 경로 수정

const LandingPage = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <img src={logo} alt="구박사 로고" className="logo" />
        <div className="nav-links">
          <a href="/login" className="nav-link">
            Log in
          </a>
          <a href="/signup" className="nav-link">
            Sign up
          </a>
        </div>
      </nav>
      <div className="main-content">
        <h1>취업이 막막해?</h1>
        <h1>스펙만 입력하고 취업 길잡이 받으러 가자!</h1>
        <div className="scroll-indicator">⌄</div>
      </div>
      <button className="cta-button">Get Started Now</button>
    </div>
  );
};

export default LandingPage;
