import React, { useState } from "react";
import {
  Container,
  TabsContainer,
  TabButton,
  MainContent,
  FeedbackSection,
  FeedbackItem,
  FeedbackTitle,
  FeedbackContent,
  FeedbackDetailSection,
  FeedbackDetailTitle,
  FeedbackDetailContent,
  SpecSidebar,
  SidebarItem,
  BottomButton,
} from "./FeedbackPageStyles"; // 스타일을 분리

import { specData } from "./FeedbackData.js"; // 피드백 데이터를 가져옴

// 피드백 페이지 컴포넌트
const FeedbackPage = () => {
  const [selectedTab, setSelectedTab] = useState("학력");
  const [activeTab, setActiveTab] = useState("아모레 퍼시픽");

  return (
    <Container>
      {/* 상단 탭 */}
      <TabsContainer>
        <TabButton
          isActive={activeTab === "아모레 퍼시픽"}
          onClick={() => setActiveTab("아모레 퍼시픽")}
        >
          아모레 퍼시픽
        </TabButton>
        <TabButton
          isActive={activeTab === "브랜드 마케터"}
          onClick={() => setActiveTab("브랜드 마케터")}
        >
          브랜드 마케터
        </TabButton>
      </TabsContainer>

      {/* 메인 컨텐츠 */}
      <MainContent>
        {/* 왼쪽 섹션 */}
        <FeedbackSection>
          {specData[selectedTab].map((item, index) => (
            <FeedbackItem key={index}>
              <FeedbackTitle>{item.title}</FeedbackTitle>
              <FeedbackContent>{item.content}</FeedbackContent>
            </FeedbackItem>
          ))}
        </FeedbackSection>

        {/* 우측 피드백 상세 섹션 */}
        <FeedbackDetailSection>
          <FeedbackDetailTitle>{selectedTab} 피드백</FeedbackDetailTitle>
          <FeedbackDetailContent>
            <p>여기에 세부 피드백 내용을 표시합니다.</p>
          </FeedbackDetailContent>
        </FeedbackDetailSection>

        {/* 사이드바 */}
        <SpecSidebar>
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
            나의 강점/약점
          </SidebarItem>
          <BottomButton>나의 스펙</BottomButton>
        </SpecSidebar>
      </MainContent>
    </Container>
  );
};

export default FeedbackPage;
