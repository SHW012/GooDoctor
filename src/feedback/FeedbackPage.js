// 파일 이름: FeedbackPage.js

import React, { useState } from "react";
import styled from "styled-components";
import { specData } from "./FeedbackData.js"; // 피드백 데이터를 가져옴

// 전체 레이아웃을 담당하는 컨테이너
const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;

// 사이드바 스타일링
const Sidebar = styled.div`
  width: 250px;
  background-color: #f0f3f7;
  padding: 20px;
  border-right: 1px solid #ccc;
`;

// 사이드바 항목 스타일
const SidebarItem = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#2c6bcf" : "#333")};
  &:hover {
    color: #2c6bcf;
  }
`;

// 콘텐츠 영역
const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

// 제목과 내용 스타일
const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FeedbackItem = styled.div`
  background-color: #edf2f7;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

// 피드백 페이지 컴포넌트
const FeedbackPage = () => {
  const [selectedTab, setSelectedTab] = useState("학력");

  return (
    <Container>
      {/* 사이드바 */}
      <Sidebar>
        <SidebarItem
          isActive={selectedTab === "학력"}
          onClick={() => setSelectedTab("학력")}
        >
          학력
        </SidebarItem>
        <SidebarItem
          isActive={selectedTab === "어학"}
          onClick={() => setSelectedTab("어학")}
        >
          어학
        </SidebarItem>
        <SidebarItem
          isActive={selectedTab === "자격증"}
          onClick={() => setSelectedTab("자격증")}
        >
          자격증
        </SidebarItem>
        <SidebarItem
          isActive={selectedTab === "수상"}
          onClick={() => setSelectedTab("수상")}
        >
          수상
        </SidebarItem>
        <SidebarItem
          isActive={selectedTab === "교내외활동"}
          onClick={() => setSelectedTab("교내외활동")}
        >
          교내외 활동
        </SidebarItem>
        <SidebarItem
          isActive={selectedTab === "인턴십경력"}
          onClick={() => setSelectedTab("인턴십경력")}
        >
          인턴십/경력
        </SidebarItem>
        <SidebarItem
          isActive={selectedTab === "강점약점"}
          onClick={() => setSelectedTab("강점약점")}
        >
          강점/약점
        </SidebarItem>
      </Sidebar>

      {/* 콘텐츠 */}
      <Content>
        <Title>{selectedTab} 피드백</Title>
        {specData[selectedTab].map((item, index) => (
          <FeedbackItem key={index}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </FeedbackItem>
        ))}
      </Content>
    </Container>
  );
};

export default FeedbackPage;
