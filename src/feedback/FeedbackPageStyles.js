import styled from "styled-components";

// 전체 레이아웃을 담당하는 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #f7f9fc;
`;

// 상단의 탭 컨테이너
export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f5;
  border-bottom: 2px solid #dcdcdc;
`;

// 각 탭 스타일
export const TabButton = styled.button`
  background-color: ${(props) => (props.isActive ? "#afc1e3" : "white")};
  color: ${(props) => (props.isActive ? "#fff" : "#333")};
  font-size: 20px;
  font-weight: bold;
  padding: 12px 240px;
  border: 1px solid #afc1e3;
  border-radius: 8px;
  margin: 0 20px;
  cursor: pointer;

  &:hover {
    background-color: #afc1e3;
    color: white;
  }
`;

// 메인 컨텐츠 영역
export const MainContent = styled.div`
  display: flex;
  justify-content: center; /* 컨텐츠를 중앙에 위치시킴 */
  padding: 15px;
  width: 100%;
  height: calc(100vh - 120px); /* 탭을 제외한 나머지 화면 사용 */
  gap: 20px; /* 사이 요소 간 간격 */
`;

// 왼쪽 피드백 섹션 (학력 등)
export const FeedbackSection = styled.div`
  width: 400px; /* 학력 섹션 크기를 유지 */
  padding: 20px;
  background-color: #edf2f7;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

// 각 피드백 항목 (학력, 자격증 등)
export const FeedbackItem = styled.div`
  margin-bottom: 25px;
`;

export const FeedbackTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #2c6bcf;
  margin-bottom: 12px;
`;

export const FeedbackContent = styled.p`
  font-size: 16px;
  color: #555;
`;

// 우측 피드백 상세 섹션
export const FeedbackDetailSection = styled.div`
  width: 120%; /* 피드백 내용을 양 옆으로 넓힘 */
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

export const FeedbackDetailTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2c6bcf;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
`;

export const FeedbackDetailContent = styled.div`
  background-color: #edf2f7;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

// 오른쪽 사이드바 스타일
export const SpecSidebar = styled.div`
  width: 500px; /* 사이드바 크기 유지 */
  padding: 20px;
  background-color: #f0f3f7;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

// 사이드바 항목 스타일
export const SidebarItem = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#2c6bcf" : "#333")};

  &:hover {
    color: #2c6bcf;
  }
`;

// "나의 스펙" 버튼 스타일
export const BottomButton = styled.button`
  background-color: #2c6bcf;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 30px;
  width: 100%;

  &:hover {
    background-color: #1e4a9a;
  }
`;
